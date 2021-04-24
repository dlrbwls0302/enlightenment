import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderNav.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal, setToggle, closeModal } from '../actions';
function HeaderNav({ isLogin, userId, setLogin, setUserId }) {

    const [userInfo, setUserInfo] = useState({
        email: '',
        photo: ''
    })
    useEffect(() => {
        const cookie = document.cookie
        const equalIndex = document.cookie.indexOf('photo');
        const semiIndex = document.cookie.indexOf(';', equalIndex);
        const photo = document.cookie.slice(equalIndex + 6, semiIndex);
        setUserInfo({
            ...userInfo,
            photo
        })

    }, [])
    
    const state = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();
    const onClick = (e) => {
        if (isLogin === false) {
            dispatch(changeModal());
        } else {
            alert('로그아웃이 되었습니다!');
            fetch('http://localhost:5000/auth/google/logout', {
                credentials: 'include'
            })
                .then(res => {
                    if (res.status === 200) {
                        setLogin(false);
                        setUserId('');
                    }
                })
        }
    }


    const onToggle = () => {
        dispatch(setToggle());
    }
    const onClose = () => {
        dispatch(closeModal());
    }

    const upToScroll = () => {
        window.scrollTo(0, 0);
    }


    return (
        <header className="header-wrap">
            <div className="header-title-wrap">
                <Link className="header-title" to={'/'} onClick={upToScroll}>ENLIGHTENMENT</Link>
            </div>
            <div className="header-contant-wrap">
                <Link className="header-magazine" to="xfile" onClick={upToScroll}>MAGAZINE</Link>
                <Link className="header-community" to="community" onClick={upToScroll}>COMMUNITY</Link>
                <a className="header-signin" onClick={(e) => { onClick(e) }}> { isLogin ? 'SIGN OUT' :'SIGN IN'}</a>
                
            </div>
        </header >
    );
}
export default HeaderNav
