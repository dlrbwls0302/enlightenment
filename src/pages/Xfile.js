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

const Xfile = ({ isLogin, userId }) => {
    // const [title, setTitle] = useState('선거 조작 사건');
    // const [description, setDescription] = useState('선거 조작 사건 어쩌구 저쩌구');
    const name = '김영희'
    const number = 1;
    const title = 'LH 투기 의혹 사건';
    const date = '2021-03-21';
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])

    const settingsOne = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const settingsTwo = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 800,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const onClick = () => {
        if(isLogin){
            history.push({
                pathname: "/write" 
            });
        } else{
            alert('로그인을 해주시기 바랍니다.');
            dispatch(openModal());
        }
    }
    return (
        <div className='main-container'>
            <div className='side-button' onClick={onClick}>
                <BsPencilSquare className='icon' color='#12222d'/>
            </div>
            <section className='sub-container-one'>
                <h1 className='slider_title_one' data-aos='zoom-out-up' data-aos-once="true">Weekly Hot Issues <FaPepperHot color='tomato' size={56}/></h1>
                <div className='container mt-5 carousel'>
                    <Slider {...settingsOne}>
                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    {/* <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60' alt='img'/> */}
                                    <div className='card-title'>LH 투기 의혹 사건</div>
                                </div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    {/* <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60' alt='img'/> */}
                                </div>
                                <div className='card-title'>선거 조작 사건</div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    {/* <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60' alt='img'/> */}
                                </div>
                                <div className='card-title'>LH 투기 의혹 사건</div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    {/* <img src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60' alt='img'/> */}
                                </div>
                                <div className='card-title'>LH 투기 의혹 사건</div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    {/* <img src='https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=60' alt='img'/> */}
                                </div>
                                <div className='card-title'>LH 투기 의혹 사건</div>
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* <h1 className='slider_title_two' data-aos='zoom-out-up' data-aos-once="true" data-aos-duration="2000">The Latest Issues <MdFiberNew color='#F22613' size={56}/></h1>
                <div className='container mt-5 carousel'>
                    <Slider {...settingsTwo}>
                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=300&q=60' alt='img'/>
                                    <div className='card-title'>LH 투기 의혹 사건</div>
                                </div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=300&q=60' alt='img'/>
                                </div>
                                <div className='card-title'>선거 조작 사건</div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=300&q=60' alt='img'/>
                                </div>
                                <div className='card-title'>LH 투기 의혹 사건</div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=300&q=60' alt='img'/>
                                </div>
                                <div className='card-title'>LH 투기 의혹 사건</div>
                            </div>
                        </div>

                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src='https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=300&q=60' alt='img'/>
                                </div>
                                <div className='card-title'>LH 투기 의혹 사건</div>
                            </div>
                        </div>
                    </Slider>
                </div> */}
            </section>


            <section className='sub-container-three'>
                <h1 className='slider_title_three' data-aos='zoom-out-up' data-aos-once="true" data-aos-duration="2000">사건 집중 조명 <GiMagnifyingGlass size={53}/></h1>
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
            </section>
        </div>
    );
};


export default Xfile;