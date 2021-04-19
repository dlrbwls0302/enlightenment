import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/HeaderNav.css';
import { VscListFlat } from 'react-icons/vsc';
import { BsX } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { changeModal } from '../actions';

function HeaderNav() {
    const [toggle, setToggle] = useState(true);
    const [navbar, setNavBar] = useState(false);

    const onToggle = () => setToggle(!toggle);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(changeModal());
    }

    return (
        <>
            <header className={navbar ? 'header active' : 'header'}>
                <Link to={'/'} className={navbar ? 'logo active' : 'logo'}>
                    당신의 선택
                </Link>
                <div className={navbar ? 'toggleBx active' : 'toggleBx'} onClick={onToggle}>
                    {toggle ? <VscListFlat size={34} className='toggleBtnOn' /> : <BsX color='#f9f7f7' size={34} className='toggleBtnOff' />}
                </div>
            </header>
            <div className={toggle ? 'sidebar active' : 'sidebar'}>
                <ul>
                    <li className='nav-text' onClick={onClick}>
                        {SidebarData[0].title}
                    </li>
                    <li className='nav-text'>
                        <Link to={SidebarData[1].path} >
                            {SidebarData[1].title}
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to={SidebarData[2].path} >
                            {SidebarData[2].title}
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to={SidebarData[3].path} >
                            {SidebarData[3].title}
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to={SidebarData[4].path} >
                            {SidebarData[4].title}
                        </Link>
                    </li>
                    {/* {SidebarData.map((data, index) => {
                        return (
                            <li key={index} className={data.className}>
                                <Link to={data.path} >
                                    {data.title}
                                </Link>
                            </li>
                        )
                        })
                    } */}
                </ul>
            </div>
        </>
    );


}

export default HeaderNav
