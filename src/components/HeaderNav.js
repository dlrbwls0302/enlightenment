import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/HeaderNav.css';
import { VscListFlat } from 'react-icons/vsc';
import { BsX } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal, setToggle, closeModal } from '../actions';
import { useHistory } from "react-router";
function HeaderNav({ isLogin, userId, setLogin, setUserId }) {
    // const [toggle, setToggle] = useState(true);  
    const [navbar, setNavBar] = useState(false);
    const history = useHistory();
    const changeBackground = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 50){
          setNavBar(true);
        } else{
          setNavBar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
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
        console.log(cookie)
    }, [])
    const state = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();
    const onClick = (e) => {
        if(isLogin === false){
            dispatch(changeModal());
        } else{
            alert('로그아웃이 되었습니다!');
            fetch('http://localhost:5000/auth/google/logout', {
                credentials: 'include'
            })
            .then(res => {
                if(res.status === 200){
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
    return (    
        <>
            <header className={navbar ? 'header active' : 'header'}>
            <div className="header_container" id="gb">
                <div className="header_logo_box">
                    <Link className="header_logo_area" to={'/'} >당신의 선택</Link>
                </div>
                <div className="header_contant_area">
                    <>
                        <div className="header_route_list"> 
                            <div className="header_route">
                               <Link className="header_route_each" to="xfile">Xfile</Link>
                            </div>  
                            <div className="header_route">
                                <Link className="header_route_each" href="https://mail.google.com/mail/&amp;ogbl" target="_top">route2</Link>
                            </div>
                        </div>
                    </>
                    {isLogin ?
                    <a className="header_profile_Btn" src={userInfo.photo} > </a>  :
                    <a class="header_signnIn_Btn"  onClick={(e) => {
                        onClick(e) 
                    }}
                    >
                        Sign in 
                    </a> 
}
            </div>
            </div>
                {/* <div className={navbar ? 'toggleBx active' : 'toggleBx'} onClick={onToggle}>
                    {state.toggle ? <VscListFlat size={34} className='toggleBtnOn' /> : <BsX color='#f9f7f7' size={34} className='toggleBtnOff'/>}
                </div> */}
            <div className={state.toggle? 'sidebar active' :'sidebar'}>
                <ul>    
                    <li className='nav-text' 
                    onClick={(e) => {onClick(e) 
                                    onToggle()
                    }}>
                        {isLogin ? '로그아웃' : '로그인'}
                    </li>
                    <li className='nav-text' onClick={() => {
                        onClose()
                    }}>
                        <Link to={SidebarData[1].path} >
                            {SidebarData[1].title}
                        </Link>
                    </li>
                    <li className='nav-text' onClick={onClose}>
                        <Link to={SidebarData[2].path}>
                            {SidebarData[2].title}
                        </Link>
                    </li>
                    <li className='nav-text' onClick={onClose}>
                        <Link to={SidebarData[3].path}>
                            {SidebarData[3].title}
                        </Link>
                    </li>
                    <li className='nav-text' onClick={onClose}>
                        <Link to={SidebarData[4].path}>
                            {SidebarData[4].title}
                        </Link>
                    </li>
                    <li className='nav-text' onClick={onClose}>
                        <Link to={SidebarData[5].path}>
                            {SidebarData[5].title}
                        </Link>
                    </li>
                </ul>
            </div>
            </header>
        </>
    );
}
export default HeaderNav
