import React, { useEffect, useState } from 'react';
import '../styles/Main.css';
// import { Link } from 'react-router-dom';
// import personOne from '../images/person1.png';
// import personTwo from '../images/person2.png';
// import personThree from '../images/person3.png';
// import personFour from '../images/person4.png';
import mapImg from '../images/imageservice.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdKeyboardArrowUp } from 'react-icons/md';
// import video from './video1.mp4';
import './sal.css';
import sal from 'sal.js';
// import ReactPageScroller from "react-page-scroller";


const Main = () => {
    useEffect(() => {
       sal({
        once: false,
        }); 
    }, []);
    
    // const goToPage = (pageNumber) => {
    //     this.reactPageScroller.goToPage(pageNumber);
    // }
 
    return (
        <>
        <section className='banner' id='banner'>
            {/* 기존 모델 */}
            {/* <div className='personBx'>
                <div className='personImg'>
                    <Link to={'/promise'} >
                        <img src={personOne} alt='personImg'/> 
                    </Link>
                    
                </div>
                <div className='personImg'>
                    <Link to={'/map'} >
                        <img src={personTwo} alt='personImg'/> 
                    </Link>
                </div>
                <div className='personImg'>
                    <Link to={'/news'} >
                        <img src={personThree} alt='personImg'/> 
                    </Link>
                </div>
                <div className='personImg'>
                    <Link to={'/opinion'} >
                        <img src={personFour} alt='personImg'/> 
                    </Link> 
                </div>
            </div> */}

            {/* 동영상 모델 */}
            {/* <video src={video} muted loop autoPlay></video> */}
            <div className='text' data-sal="zoom-in" data-sal-duration="1000" data-sal-once>
                <h2>대한민국을 책임질</h2>
                <h3>당신의 선택</h3>
                <p>
                정치에 점점 관심이 멀어져가는 20·30 세대에 정치 바람 불어넣기 프로젝트
                </p>
                <a href='http://localhost:3000'>메인기능 체험하러 가기</a>
            </div>

            <div className='arrow'>
                <p className='arrowText'>사이트 둘러보기</p>
                <a className='arrow-link' href='#about'>
                    <MdKeyboardArrowDown className='arrowOne' size={45} color='#f5b72a'/>
                </a>
            </div>
        </section>

        {/* about election */}
        <section className='about' id='about'>
            <div className='contentBx'>
                <h2 className='heading' data-sal="slide-right" data-sal-duration="1000">공약을 쉽게 확인하세요.</h2>
                <p className='text' data-sal="slide-right" data-sal-duration="1000">
                    일일이 찾아보기는 귀찮고 한 눈에 알아보기 불편한 공약. 당신의 소중한 한 표를 행사하기 전에 이곳에서 후보들의 공약을 확인하세요.
                </p>
                
            </div>
            <div className='aboutImg'></div>
            <div className='arrow'>
                <a className='arrow-link' href='#banner'>
                    <MdKeyboardArrowUp className='arrowTwo' size={45} color='#f5b72a'/>
                </a>
                <a className='arrow-link' href='#map'>
                    <MdKeyboardArrowDown className='arrowTwo' size={45} color='#f5b72a'/>
                </a>
               
            </div>
        </section>

        {/* about map */}
        <section className='map' id='map'>
            <h2 className='mapHeading' data-sal="slide-down" data-sal-duration="1000">가까운 곳에서 투표하세요.</h2>
            <p className='mapText' data-sal="slide-down" data-sal-duration="1000"> 
                당신의 위치를 검색하면 가장 가까운 위치에 있는 투표소를 알려줍니다.
            </p>
            <div className='container'>
                <div className='mapBx' data-sal="zoom-out" data-sal-duration="1000">
                    <img src={mapImg} alt='mapImg'/>    
                </div>
                <div className='mapBx' data-sal="zoom-out" data-sal-duration="1000">
                    <img src={mapImg} alt='mapImg'/>
                </div>
                <div className='mapBx' data-sal="zoom-out" data-sal-duration="1000">
                    <img src={mapImg} alt='mapImg'/>
                </div>
            </div>
            <div className='arrow'>
                <a className='arrow-link' href='#about'>
                    <MdKeyboardArrowUp className='arrowThree' size={45} color='#f5b72a'/>
                </a>
                <a className='arrow-link' href='#news'>
                    <MdKeyboardArrowDown className='arrowThree' size={45} color='#f5b72a'/>
                </a>
            </div>
        </section>

        {/* about news */}
        <section className='news' id='news'>
            <div className='newsBx'>
                <h2 className='newsHeading' data-sal="slide-right" data-sal-duration="1000">선거 관련 소식을 빠르게 확인하세요.</h2>
                <p className='newsText' data-sal="slide-right" data-sal-duration="1000"> 검색 기능을 통해 선거에 관련된 뉴스뿐만 아니라 관심있는 뉴스를 검색하세요. 공신력있는 뉴스들만 모아 당신에게 제공합니다.</p>
            </div>
            <div className='newsImgBx'></div>
            
            <div className='arrow'>
                <a className='arrow-link' href='#map'>
                    <MdKeyboardArrowUp className='arrowFour' size={45} color='#f5b72a'/>
                </a>
                <a className='arrow-link' href='#opinion'>
                    <MdKeyboardArrowDown className='arrowFour' size={45} color='#f5b72a'/>
                </a>
            </div>
        </section>

        {/* opinion section */}
        <section className='opinion' id='opinion'>
            <h2 className='opinionHeading' data-sal="slide-down" data-sal-duration="1000">소중한 의견을 남겨주세요.</h2>
            <p className='opinionText' data-sal="slide-down" data-sal-duration="1000"> 
                당신이 지지하는 후보에게 따뜻한 응원의 메세지를 남겨주세요. 당신의 응원 한 마디가 큰 힘이 됩니다.
            </p>
            <div className='opinionContainer'>
                <div className='opinionContentBx' data-sal="zoom-out" data-sal-duration="1000">
                    <div>
                        <p>
                        이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.
                        </p>
                        <h3>- 김xx 님</h3>
                    </div>
                </div>

                <div className='opinionContentBx' data-sal="zoom-out" data-sal-duration="1000">
                    <div>
                        <p>
                        이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.이번 선거에서는 xxx후보가 이겼으면 좋겠습니다.
                        </p>
                        <h3>- 이xx 님</h3>
                    </div>
                </div>
            </div>
            <a href='http://localhost:3000' className='button'>메인기능 체험하러 가기</a>
            <div className='arrow'>
                <p className='arrowText'>맨위로</p>
                <a className='arrow-link' href='#banner'>
                    <MdKeyboardArrowUp className='arrowFive' size={45} color='#f5b72a'/>
                </a>
            </div>
        </section>
        </>
    );
};

export default Main;