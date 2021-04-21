import React, { useEffect } from 'react';
import '../styles/Main.css';
import mapImg from '../images/imageservice.png';
import { BiMouse } from 'react-icons/bi';
// import video from './video1.mp4';
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

            {/* <video src={video} muted loop autoPlay></video> */}
            <div className='text' data-aos='fade-up' data-aos-once="false">
                <h2>대한민국을 책임질</h2>
                <h3>당신의 선택</h3>
                <p>
                    당신의 한 표가 더 아름다워지도록
                    <br></br>정치와 선거에 새 관심 불어넣기
                    <br></br>프로젝트
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
            <div className='contentBx'>
                <h2 className='heading'>공약 확인</h2>
                <p className='text'>
                    일일이 찾아보기는 귀찮고 
                    <br></br>한 눈에 알아보기 불편한 공약. 
                    <br></br>소중한 한 표를 행사하기 전에 
                    <br></br>후보자들의 공약을 확인하세요.
                </p>
                
            </div>
            <div className='aboutImg'></div>
        </section>

        {/* about map */}
        <section className='map' id='map'>
            <h2 className='mapHeading'>투표소 위치 제공</h2>
            <p className='mapText'> 
                당신의 위치를 검색하면 
                <br></br>가장 가까운 위치에 있는 
                <br></br>투표소를 알려줍니다.
            </p>
                <div className='container'>
                    <div className='mapBx'>
                        <img src={mapImg} alt='mapImg' />
                    </div>
                    <div className='mapBx'>
                        <img src={mapImg} alt='mapImg' />
                    </div>
                    <div className='mapBx'>
                        <img src={mapImg} alt='mapImg' />
                    </div>
                </div>
        </section>

        <section className='news' id='news'>
            <div className='newsBx'>
                <h2 className='newsHeading'>
                    정치 관련 뉴스
                </h2>
                <p className='newsText'>
                    한 쪽으로 치우치지않은 공신력있는 
                    <br></br>뉴스들만 모아 당신에게 제공합니다.
                </p>
            </div>
            <div className='newsImgBx'></div>
        </section>

        {/* opinion section */}
            <section className='opinion' id='opinion'>
        
                <h2 className='opinionHeading'>소중한 의견을 남겨주세요.</h2>
                <p className='opinionText'> 
                    이 사이트가 더욱 발전할 수 있도록 
                    <br></br>당신의 소중한 의견을 남겨주세요. 
                </p>
                <div className='opinionContainer'>
                    <div className='opinionContentBx'>
                        <div>
                            <p>
                                마이페이지를 만들어주세요.
                                내가 쓴 글 목록을 확인하고
                                수정 및 삭제를 하고싶습니다.
                            </p>
                            <h3>- 이xx 님</h3>

                        </div>
                    </div>
                    <div className='opinionContentBx'>
                        <div>
                            <p>
                                시사 이슈도 다뤄주세요! 또한 제보 같은 것도 받아서 좀 더 심도있게 다뤘으면 좋겠습니다!
                            </p>
                            <h3>- 김xx 님</h3>
                        </div>
                    </div>

                </div>
                <div className="main-opinion-button-box">
                    <Link to={'/xfile'} className='button'>
                        정치 X-파일 바로가기                  
                    </Link>
                </div>
        
            </section>
        </ReactPageScroller>
    );
};

export default Main;