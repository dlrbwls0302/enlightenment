import React, { useEffect, useState } from 'react';
// import { SliderData } from '../components/SliderData';
import '../styles/Xfile.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiMagnifyingGlass } from 'react-icons/gi';
import Case from '../components/Case';
import { openModal } from '../actions/index';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import dogpig from '../images/dogpig.jpeg';
import { useDispatch } from 'react-redux'

const Xfile = ({ isLogin, userId }) => {
    // const [title, setTitle] = useState('선거 조작 사건');
    // const [description, setDescription] = useState('선거 조작 사건 어쩌구 저쩌구');
    // const name = '김영희'
    // const number = 1;
    // const title = 'LH 투기 의혹 사건';
    // const date = '2021-03-21';
    const dispatch = useDispatch();
    const history = useHistory();
    const [magazines, setMagazines] = useState([]);

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
    }
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
    }

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/magazines')
        .then(res => res.json())
        .then(json => {
            if (json.magazines.length !== 0) {
                setMagazines(json.magazines)
            }
        })
    }, [])
    useEffect(() => {
        document.querySelector('.header')
    })

    const settingsOne = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
            console.log("after change", currentSlide);
        },
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const onClick = () => {
        if(isLogin){
            history.push({
                pathname: '/write' 
            });
        } else{
            alert('로그인을 해주시기 바랍니다.');
            dispatch(openModal());
        }
    }
    return (
        <div className='main-container'>
            <div className='item'>
                <div className='menu-header'></div>
                <p className='menu-line-before'></p>
                <div className='menu-select'>
                    <div className='menu-select-item'>
                        <Link to={'/'} className='go-to-main'>
                            메인                  
                        </Link>
                    </div>
                    <div className='menu-select-item' onClick={onClick}>글쓰기</div>
                    <div className='menu-select-item' onClick={onClick}>SNS</div>
                    <div className='menu-select-item' onClick={onClick}>뉴스보기</div>
                    <div className='menu-select-item' onClick={onClick}>의견남기기</div>
                </div>
                <p className='menu-line-after'></p>
            </div>

            <div className='item'>
                <div className='slider_title_one'>이 페이지에서는 </div>
                <div className='item-content'>
                    대한민국 건국이래 정치계에는 수많은 사건들이 발생하였고 그로 인하여 대한민국의 근간이 흔들리는 일까지 발생하였습니다. 하지만 그 중 대부분의 이슈는 적법한 절차없이 묻혀버렸고 비공식적으로 종결되었습니다. 우리는 그러한 이슈들을 다시 한 번 파헤쳐내어 대한민국의 정의를 되찾고자 합니다. 
                </div>

                <div className='slider_title_one'>주간 핫이슈</div>
                <div className='container mt-5 carousel'>
                    <Slider {...settingsOne}>
                        <div className='card-wrapper'>
                            LH 투기 의혹 사건1
                        </div>

                        <div className='card-wrapper'>
                            LH 투기 의혹 사건2
                        </div>
                        
                        <div className='card-wrapper'>
                            LH 투기 의혹 사건3
                        </div>

                        <div className='card-wrapper'>
                            LH 투기 의혹 사건4
                        </div>

                        <div className='card-wrapper'>
                            LH 투기 의혹 사건5
                        </div>
                    </Slider>
                </div>

                <div className='slider_title_one'>새로운 이슈</div>
                <div className='container mt-5 carousel'>
                    <Slider {...settingsOne}>
                        <div className='card-wrapper'>
                            LH 투기 의혹 사건1
                        </div>

                        <div className='card-wrapper'>
                            LH 투기 의혹 사건2
                        </div>
                        
                        <div className='card-wrapper'>
                            LH 투기 의혹 사건3
                        </div>

                        <div className='card-wrapper'>
                            LH 투기 의혹 사건4
                        </div>

                        <div className='card-wrapper'>
                            LH 투기 의혹 사건5
                        </div>
                    </Slider>
                </div>

                
            </div>

            <div className='item'>
                <div className='main-header'>
                    <h1 className='slider_title_three'>사건 집중 조명 <GiMagnifyingGlass className='glass' color='rgb(50,50,40)'/></h1>
                </div>
                <div className='board_list_wrap'>
                    <table className='board_list'>
                        <caption>게시판 목록</caption>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>작성일</th>
                                <th>조회수</th>
                            </tr>  
                        </thead>

                        <tbody>
                            <tr>
                                <td>12</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr> 
                            <tr>
                                <td>11</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr> 
                            <tr>
                                <td>10</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr> 
                            <tr>
                                <td>9</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr> 
                            <tr>
                                <td>8</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr> 
                            <tr>
                                <td>7</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr> 
                            <tr>
                                <td>6</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr> 
                            <tr>
                                <td>5</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr>     

                                <tr>
                                <td>4</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>21</td>
                            </tr>     

                                <tr>
                                <td>3</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>32</td>
                            </tr>     

                                <tr>
                                <td>2</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세요
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>41</td>
                            </tr>     

                                <tr>
                                <td>1</td>
                                <td className='tlt'>
                                    <a href='#'>
                                        안녕하세용 안영ㅎ아세용ㅈ루ㅢ주리줄fwfwfefwfwfwffwfwfwfwfwefewfw
                                    </a>
                                </td>
                                <td>관리자</td>
                                <td>2021-4-19</td>
                                <td>2</td>
                            </tr>        
                        </tbody>
                    </table>
                    <div className='paging'>
                       
                        <a href='#' className='bt'>이전 페이지</a>
                        <a href='#' className='num'>1</a>
                        {/* <a href='#' className='num'>2</a>
                        <a href='#' className='num'>3</a> */}
                        <a href='#' className='bt'>다음 페이지</a>
                        
                    </div>
                </div>
            </div>

            <div className='item'>
                <div className='slider_title_two'>"어차피 대중들은 OOO입니다."</div>
                    <div className='item-content'>
                        <img src={dogpig} alt='dogpig' />
                        <p>OOO에 들어갈 말을 채우는 건 여러분들의 몫입니다. </p>
                    </div>
            </div>

            <div className='item'>
                당신의 선택 created by Team 12
            </div>
        </div>
    );
};


export default Xfile;