import React from 'react';
import '../styles/Main.css';
import coverImg from '../images/main.jpg';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Main = () => {
    return (
        <>
        <div className='banner'>
            <img src={coverImg} alt='coverImg'/>
            <div className='arrow'>
                <MdKeyboardArrowDown className='arrowOneFirst' size={45} color='#f5b72a'/>
            </div>
        </div>

        {/* about election */}
        <section className='about'>
            <div className='contentBx'>
                <h2 className='heading'>공약을 쉽게 확인하세요.</h2>
               
                <p className='text'>
                    일일이 찾아보기 귀찮고 한 눈에 알아보기 불편한 공약. 당신의 소중한 한표를 행사하기 전에 이곳에서 후보들의 공약을 확인하세요.
                </p>
                
            </div>
            <div className='aboutImg'></div>
            <div className='arrow'>
                <MdKeyboardArrowDown className='arrowTwoFirst' size={45} color='#f5b72a'/>
            </div>
        </section>

        {/* about map */}
        {/* <section className='map'>
            <div className='contentBx'>
                <h2 className='heading'>공약을 쉽게 확인하세요.</h2>
               
                <p className='text'>
                    일일이 찾아보기 귀찮고 한 눈에 알아보기 불편한 공약. 당신의 소중한 한표를 행사하기 전에 이곳에서 후보들의 공약을 확인하세요.
                </p>
                
            </div>
            <div className='aboutImg'></div>
            <div className='arrow'>
                <MdKeyboardArrowDown className='arrowTwoFirst' size={45} color='#f5b72a'/>
            </div>
        </section> */}
    </>
    );
};

export default Main;