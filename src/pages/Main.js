import React, { useEffect, useState } from 'react';
import '../styles/Main.css';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import Footer from '../components/Footer'
const Main = () => {   
    const [productIndex, setProductIndex] = useState(0);
    const [listItems, setListItems] = useState([]);
    const [slider, setSlider] = useState('');
    const [reverseItems, setReverseItems] = useState([]);
    const [direction, setDirection] = useState({
        left: '',
        height: '',
        width: '',
        zIndex: '',
    })
    const reverse = () => {
        reverseItems.forEach((el, index) => {
            if(index < listItems.length - 1){
                el.style.left = reverseItems[index + 1].offsetLeft + 'px'
                el.style.height = reverseItems[index + 1].offsetHeight + 'px'
                el.style.width = reverseItems[index + 1].offsetWidth + 'px'
                el.style.zIndex = reverseItems[index + 1].zIndex
                el.style.transform = 'unset'
                el.style.opacity = 1
            }
            if(index === listItems.length - 1){
                el.style.transform = 'scale(1.5)'
                el.style.opacity = '0'

                let cln = el.cloneNode(true)

                setTimeout(() => {
                    el.remove()
                    // isSliding = false
                }, 1000)
            }
        })
    }

    useEffect(() => {
        let slide = document.querySelectorAll('.new-slide');
        let container = document.querySelector('.slider-container');
        setTimeout(() => {
            // const div_array = Array.prototype.slice.call(slide);
            setListItems(slide)
            setSlider(container)
            setReverseItems(Array.from(slide).slice().reverse());
            setDirection({
                left: slide[slide.length - 1].offsetLeft + 'px',
                height: slide[slide.length - 1].offsetHeight + 'px',
                width: slide[slide.length - 1].offsetWidth + 'px',
                zIndex: slide[slide.length - 1].style.zIndex 
            })
        }, 500);
    }, []);
    

    
    useEffect(() => {
        reverse()
    }, [productIndex])

    
    return(
        <div className='new-main-container'>
            <div className='overlay'></div>
            
            {/* top nav */}
            {/* <div className='new-nav'>
                <div className='new-menu'>
                    <div className='hamburger'></div>
                </div>
                <div className='new-logo'>TUAT.TA</div>
                <div className='cart'>
                    ICON
                </div>
            </div> */}
            {/* end top nav */}

            {/* social icon */}
            <div className='sci'>
                <FaFacebook className={'bx bxl-facebook-circle'} />
                <FaInstagram className={'bx bxl-instagram-alt'}/>
                <FaYoutube className={'bx bxl-youtube'}/>
                <FaTwitter className={'bx bxl-twitter'}/>
                
            </div>
            {/* end social icon */}

            {/* fashion label */}
                <div className='fashion'>
                    당신의 선택
                </div>
            {/* end fashion label */}

            {/* product info */}
                <div className={'col-5 z-index-99'}>
                    <div className='info-section'>
                        <div className={productIndex === 0 ?'product-info active' : 'product-info'}>
                            <h1>
                                CREA<span className='txt-yellow'>TIVE</span>
                            </h1>
                            <h1>
                                <span className='txt-yellow'>DE</span>SIGN
                            </h1>
                            <span>
                                Collection 2020
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='go-to-xfile'>
                                정치 X-파일
                            </button>
                        </div>

                        <div className={productIndex === 1 ?'product-info active' : 'product-info'}>
                            <h1>
                                PRO<span className='txt-yellow'>MISE</span>
                            </h1>
                            <h1>
                                <span className='txt-yellow'>CHE</span>CK
                            </h1>
                            <span>
                                Collection 2020
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='go-to-xfile'>
                                정치 X-파일
                            </button>
                        </div>

                        <div className={productIndex === 2 ?'product-info active' : 'product-info'}>
                            <h1>
                                MA<span className='txt-yellow'>P</span>
                            </h1>
                            <h1>
                                <span className='txt-yellow'>CHE</span>CK
                            </h1>
                            <span>
                                Collection 2020
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='go-to-xfile'>
                                정치 X-파일
                            </button>
                        </div>

                        <div className={productIndex === 3 ?'product-info active' : 'product-info'}>
                            <h1>
                                NEWS<span className='txt-yellow'>PAPER</span>
                            </h1>
                            <h1>
                                <span className='txt-yellow'>R</span>EAD
                            </h1>
                            <span>
                                Collection 2020
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='go-to-xfile'>
                                정치 X-파일
                            </button>
                        </div>

                        {/* <div className={productIndex === 4 ?'product-info active' : 'product-info'}>
                            <h1>
                                OPI<span className='txt-yellow'>NION</span>
                            </h1>
                            <h1>
                                <span className='txt-yellow'>WR</span>ITE
                            </h1>
                            <span>
                                Collection 2020
                            </span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button className='go-to-xfile'>
                                정치 X-파일
                            </button>
                        </div> */}
                    </div>
                </div>
            {/* end product info */}

            {/* product images slide */}
                <div className='col-7'>
                    {/* slider */}
                        <div className='slider-container'>
                            <div className='new-slide'>
                                <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/magazine.jpeg")' }}></div>
                            </div>
                            
                            <div className='new-slide'>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/promise.jpeg")' }}></div>
                            </div>

                            <div className='new-slide'>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/map.jpeg")' }}></div>
                            </div>

                            <div className='new-slide'>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/newspaper.jpeg")' }}></div>
                            </div>

                            {/* <div className='new-slide'>
                            <div className='img-holder'
                                style={{ backgroundImage: 'url("https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/opinion.jpeg")' }}></div>
                            </div> */}
                        </div>

                    {/* end slider */}
                </div>

                <div className={'slide-control z-index-99'}>
                    <FiArrowRight className='right-arrow' onClick={() => {
                        if(productIndex + 1 > 3){
                            setProductIndex(0);
                        } else {
                            setProductIndex(productIndex + 1)
                        }
                    }} />
                </div>
            {/* end product images slide */}
            <Footer></Footer>
        </div>
        
    );
};

export default Main;