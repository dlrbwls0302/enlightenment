import React, { useState } from 'react';
import '../styles/Main.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Main = () => {   
    const [productIndex, setProductIndex] = useState(0);
    
    return(
        <div className='new-main-container'>
            <div className='overlay'></div>
                <div className={'col-5 z-index-99'}>
                    <div className='info-section'>
                        <div className={productIndex === 0 ? 'product-info active':'product-info'}>
                            <h1>
                            <span className='txt-red'>S</span>hare
                            </h1>
                            <h1>
                            <span className='txt-red'>M</span>agazine
                            </h1>
                            <span>
                            TEAM 12 <span className='reduce-space'>PROJECT</span> 2021
                            </span>
                            <p>
                                언택트 시대, 당신을 세상과 이어줄 단 하나의 정치 매거진 플랫폼
                            </p>
                            <Link to="/xfile">
                            <button className='go-to-xfile'>
                                MAGAZINE
                            </button>
                            </Link>
                            
                        </div>

                        <div className={productIndex === 1 ? 'product-info active':'product-info'}>
                            <h1>
                               <span className='txt-red'>R</span>EVEAL
                            </h1>
                            <h1>
                                <span className='txt-red'>T</span>HE <span className='txt-red'>T</span>RUTH
                            </h1>
                            <span>
                            TEAM 12 <span className='reduce-space'>PROJECT</span> 2021
                            </span>
                            <p>
                            과거에 묻혀버린 진실, 당신의 글을 통해 밝혀주세요 
                            </p>
                            <Link to="/xfile">
                            <button className='go-to-xfile'>
                                MAGAZINE
                            </button>
                            </Link>
                        </div>

                        <div className={productIndex === 2 ? 'product-info active':'product-info'}>
                            <h1>
                                <span className='txt-red'>I</span>nfluence
                            </h1>
                            <h1>
                            <span className='txt-red'>P</span>EOPLE 
                            </h1>
                            <span>
                            TEAM 12 <span className='reduce-space'>PROJECT</span> 2021
                            </span>
                            <p>
                               여러분의 소중한 글은 세상을 바꾸는 원동력입니다
                            </p>
                            <Link to="/xfile">
                            <button className='go-to-xfile'>
                                MAGAZINE
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            {/* end product info */}

            {/* product images slide */}
                <div className='col-7'>
                    {/* slider */}
                        <div className='slider-container'>
                            <div className={productIndex === 0 ? 'new-slide front' : (productIndex === 1 ? 'new-slide back' : (productIndex === 2 ? 'new-slide middle' : 'new-slide front'))}>
                                <div className='img-holder-one'>
                                    {/* <video muted autoPlay loop>
                                        <source src={video1} type="video/mp4" />
                                    </video> */}
                                </div>
                            </div>
                            
                            <div className={productIndex === 0 ? 'new-slide middle' : (productIndex === 1 ? 'new-slide front' : (productIndex === 2 ? 'new-slide back' : 'new-slide middle'))}>
                            <div className='img-holder-two'></div>
                            </div>

                            <div className={productIndex === 0 ? 'new-slide back' : (productIndex === 1 ? 'new-slide middle' : (productIndex === 2 ? 'new-slide front' : 'new-slide back'))}>
                            <div className='img-holder-three'></div>
                            </div>

                        </div>

                    {/* end slider */}
                </div>

                <div className={'slide-control z-index-99'} onClick={
                    () => {
                        if (productIndex + 1 > 2){
                            setProductIndex(0)
                        } else{
                            setProductIndex(productIndex + 1)
                        }
                    }
                }>
                    <FiArrowRight className='right-arrow' />
                </div>
            {/* end product images slide */}

            <div className={productIndex === 0 ? 'main-page-line first' : (productIndex === 1 ? 'main-page-line second' : (productIndex === 2 ? 'main-page-line third' : 'main-page-line first'))}></div>
            
        </div>
        
    );
};

export default Main;