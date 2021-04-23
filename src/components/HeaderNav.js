import React, { useState } from 'react';
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

    const state = useSelector((state) => state.modalReducer);
    const dispatch = useDispatch();
    const ec2Url = 'http://ec2-3-34-52-239.ap-northeast-2.compute.amazonaws.com:5000';
    const onClick = (e) => {
        if(e.target.textContent === '로그인'){
            dispatch(changeModal());
        } else{
            alert('로그아웃이 되었습니다!');
            fetch(`${ec2Url}/auth/google/logout`, {
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
                <Link to={'/'} className={navbar ? 'logo active' : 'logo'} onClick={onClose}>
                    당신의 선택                    
                </Link>
                <div className={navbar ? 'toggleBx active' : 'toggleBx'} onClick={onToggle}>
                    {state.toggle ? <VscListFlat size={34} className='toggleBtnOn' /> : <BsX color='#f9f7f7' size={34} className='toggleBtnOff'/>}
                </div>
            </header>
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
        </>
    );


}

export default HeaderNav
