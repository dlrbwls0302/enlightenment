import React, { useEffect } from 'react';
import '../styles/Main.css';
import mapImg from '../images/imageservice.png';
import { BiMouse } from 'react-icons/bi';
import video from './video1.mp4';
import { Link } from 'react-router-dom';
import ReactPageScroller from 'react-page-scroller';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {      
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    
    return (
        <ReactPageScroller>
        <section className='banner' id='banner'>
            {/* 동영상 모델 */}
            {/* <video src={video} muted loop autoPlay></video> */}
            <div className='text' data-aos='fade-up' data-aos-once="false">
                <h2>대한민국을 책임질</h2>
                <h3>당신의 선택</h3>
                <p>
                당신의 한 표가 더 아름다워지도록 정치와 선거에 새 관심 불어넣기 프로젝트
                </p>
                <Link to={'/xfile'} className='link-to-xfile'>
                    정치 X-파일 바로가기                   
                </Link>
            </div>

            <div className='arrow'>
                <p className='arrowText'>사이트 둘러보기</p>
                <BiMouse className='arrowOne' size={45} color='#f5b72a'/>
            </div>
        </section>

        {/* about election */}
        <section className='about' id='about'>
            {/* <div className='about-background'></div> */}
            <div className='contentBx'>
                <h2 className='heading'>공약을 쉽게 확인하세요.</h2>
                <p className='text'>
                    일일이 찾아보기는 귀찮고 한 눈에 알아보기 불편한 공약. 당신의 소중한 한 표를 행사하기 전에 이곳에서 후보들의 공약을 확인하세요.
                </p>
                
            </div>
            <div className='aboutImg'></div>
        </section>

        {/* about map */}
        <section className='map' id='map'>
        {/* <div className='map-background'></div> */}
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
        </section>

        {/* about news */}
        <section className='news' id='news'>
            {/* <div className='news-background'></div> */}
            <div className='newsBx'>
                <h2 className='newsHeading'>선거 관련 소식을 빠르게 확인하세요.</h2>
                <p className='newsText'> 검색 기능을 통해 선거에 관련된 뉴스뿐만 아니라 관심있는 뉴스를 검색하세요. 공신력있는 뉴스들만 모아 당신에게 제공합니다.</p>
            </div>
            <div className='newsImgBx'></div>
        </section>

        {/* opinion section */}
        <section className='opinion' id='opinion'>
        {/* <div className='opinion-background'></div> */}
            <h2 className='opinionHeading'>소중한 의견을 남겨주세요.</h2>
            <p className='opinionText'> 
                이 사이트가 더욱 발전할 수 있도록 당신의 소중한 의견을 남겨주세요. 우리는 모든 의견을 중요하게 생각합니다.
            </p>
            <div className='opinionContainer'>
                <div className='opinionContentBx'>
                    <div>
                        <p>
                            저는 이 사이트를 이용하면서 이런 점이 불편해요. 이런 부분은 꼭 개선 해주셨으면 좋겠습니다. 저는 이 사이트를 이용하면서 이런 점이 불편해요. 이런 부분은 꼭 개선 해주셨으면 좋겠습니다. 저는 이 사이트를 이용하면서 이런 점이 불편해요. 이런 부분은 꼭 개선 해주셨으면 좋겠습니다.
                        </p>
                        <h3>- 김xx 님</h3>
                    </div>
                </div>

                <div className='opinionContentBx'>
                    <div>
                        <p>
                        저는 이 사이트를 이용하면서 이런 점이 불편해요. 이런 부분은 꼭 개선 해주셨으면 좋겠습니다. 저는 이 사이트를 이용하면서 이런 점이 불편해요. 이런 부분은 꼭 개선 해주셨으면 좋겠습니다. 저는 이 사이트를 이용하면서 이런 점이 불편해요. 이런 부분은 꼭 개선 해주셨으면 좋겠습니다. 
                        </p>
                        <h3>- 이xx 님</h3>
                    </div>
                </div>
            </div>
            <Link to={'/xfile'} className='button'>
                정치 X-파일 바로가기                  
            </Link>
        </section>
        </ReactPageScroller>
         
       
    );
};

export default Main;