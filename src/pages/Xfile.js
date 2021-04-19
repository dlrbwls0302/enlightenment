import React, { useEffect, useState } from 'react';
// import { SliderData } from '../components/SliderData';
import '../styles/Xfile.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPepperHot } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { MdFiberNew } from 'react-icons/md';
import { GiMagnifyingGlass } from 'react-icons/gi';
import Case from '../components/Case';
import { useDispatch } from 'react-redux';
import { openModal } from '../actions/index';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

const Xfile = ({ isLogin, userId }) => {
    // const [title, setTitle] = useState('선거 조작 사건');
    // const [description, setDescription] = useState('선거 조작 사건 어쩌구 저쩌구');
    const name = '김영희'
    const number = 1;
    const title = 'LH 투기 의혹 사건';
    const date = '2021-03-21';
    const dispatch = useDispatch();
    const history = useHistory();
    const [magazines, setMagazines] = useState([])

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
        autoplaySpeed: 4000
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
                {/* <div className='menu-header'></div> */}
            
            </div>

            <div className='item'>
                <div className='slider_title_one'>주간 핫이슈 <FaPepperHot color='tomato' size={20}/></div>
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

                <div className='slider_title_two'>새로운 이슈 <MdFiberNew color='tomato' size={20}/></div>
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
                <div className='menu-select'>
                    <div className='menu-select-item'>
                        <Link to={'/'} className='go-to-main'>
                            메인                  
                        </Link>
                    </div>
                    <div className='menu-select-item' onClick={onClick}>글쓰기</div>
                    <div className='menu-select-item' onClick={onClick}>뉴스보기</div>
                    <div className='menu-select-item' onClick={onClick}>의견남기기</div>
                </div>
                <div className='main-header'>
                    <h1 className='slider_title_three'>사건 집중 조명 <GiMagnifyingGlass size={40}/></h1>
                </div>
                
                
            </div>

            <div className='item'>
                
            </div>

            {/* <section className='sub-container-three'>
                <h1 className='slider_title_three'>사건 집중 조명 <GiMagnifyingGlass size={53}/></h1>
                <div className='case-contanier'>
                    <table border = '1'>
                    <tr>
                        <th>번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>작성일</th>
                    </tr>
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                        <Case name={name} number={number} title={title} date={date} />
                    </table>
                </div>
            </section> */}
        </div>
    );
};


export default Xfile;