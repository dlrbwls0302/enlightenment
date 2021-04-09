import React, { useState } from 'react';
import '../styles/Main.css';
import coverImg from '../images/main.jpg';
import mapImg from '../images/imageservice.png';
import speechbubble from '../images/speech.png';
import { ImNewspaper } from 'react-icons/im';
import { MdKeyboardArrowDown } from 'react-icons/md';


const Main = ({history}) => {
    const [isShown, setIsShown] = useState(false);
    return (
        <>
        <div className='banner' id='banner'>
            <img src={coverImg} alt='coverImg'/>
            <div className='arrow'>
                <a className='arrow-link' href='#about'>
                    <MdKeyboardArrowDown className='arrowOne' size={45} color='#f5b72a'/>
                </a>
            </div>
        </div>

        {/* about election */}
        <section className='about' id='about'>
            <div className='contentBx'>
                <h2 className='heading'>공약을 쉽게 확인하세요.</h2>
               
                <p className='text'>
                    일일이 찾아보기 귀찮고 한 눈에 알아보기 불편한 공약. 당신의 소중한 한 표를 행사하기 전에 이곳에서 후보들의 공약을 확인하세요.
                </p>
                
            </div>
            <div className='aboutImg'></div>
            <div className='arrow'>
                <a className='arrow-link' href='#map'>
                    <MdKeyboardArrowDown className='arrowTwo' size={45} color='#f5b72a'/>
                </a>
            </div>
        </section>

        {/* about map */}
        <section className='map' id='map'>
            <h2 className='mapHeading'>가까운 곳에서 투표하세요.</h2>
            <p className='mapText'> 
                당신의 위치를 검색하면 가장 가까운 위치에 있는 투표소를 알려줍니다.
            </p>
            <div className='container'>
                <div className='mapBx'>
                    <img src={mapImg} alt='mapImg'/>    
                </div>
                <div className='mapBx'>
                    <img src={mapImg} alt='mapImg'/>
                </div>
                <div className='mapBx'>
                    <img src={mapImg} alt='mapImg'/>
                </div>
            </div>
            <div className='arrow'>
                <a className='arrow-link' href='#news'>
                    <MdKeyboardArrowDown className='arrowThree' size={45} color='#f5b72a'/>
                </a>
            </div>
        </section>

        {/* about news */}
        <section className='news' id='news'>
            <div className='newsBx'>
                <h2 className='newsHeading'>선거 관련 소식을 빠르게 확인하세요.</h2>
                <p className='newsText'> 검색 기능을 통해 선거에 관련된 뉴스뿐만 아니라 관심있는 뉴스를 검색하세요.</p>
                <div class={isShown? 'newsComment visible': 'newsComment'}>
                    <img src={speechbubble} alt='newsImg'/>
                </div> 
                <ImNewspaper onClick={() => history.push({ pathname: '/news' })} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className='newsIcon'/>
            </div>
            <div className='newsImgBx'></div>
            
            <div className='arrow'>
                <a className='arrow-link' href='#opinion'>
                    <MdKeyboardArrowDown className='arrowFour' size={45} color='#f5b72a'/>
                </a>
            </div>
        </section>
    </>
    );
};

export default Main;