import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/HeaderNav.css';
import { VscListFlat } from 'react-icons/vsc';
import { BsX } from 'react-icons/bs';



function HeaderNav() {
    const [toggle, setToggle] = useState(true);  
    const [navbar, setNavBar] = useState(false);

    const onToggle = () => setToggle(!toggle);

    const changeBackground = () => {
        // console.log(window.scrollY);
        if(window.scrollY >= 74){
          setNavBar(true);
        } else{
          setNavBar(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return(
        <>
            <header className={navbar ? 'header active' : 'header'}>
                <Link to={'/'} className={navbar ? 'logo active' : 'logo'}>
                    당신의 선택                    
                </Link>
                <div className={navbar ? 'toggleBx active' : 'toggleBx'} onClick={onToggle}>
                    {toggle ? <VscListFlat size={34} className='toggleBtnOn' /> : <BsX color='#f9f7f7' size={34} className='toggleBtnOff'/>}
                </div>
            </header>
            <div className={toggle? 'sidebar active' :'sidebar'}>
                <ul>
                    {SidebarData.map((data, index) => {
                        return (
                            <li key={index} className={data.className}>
                                <Link to={data.path} >
                                    {data.title}
                                </Link>
                            </li>
                        )
                        })
                    }
                </ul>
            </div>
        </>
    );

    
}

export default HeaderNav
