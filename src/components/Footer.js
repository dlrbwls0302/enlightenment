import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <h2 className="footer-logo-name">ENLIGHTENMENT</h2>
                <ul className="footer-company-container">
                    <h3 className="company title">PROJECT</h3>
                    <li className="footer-company-one">Magazine</li>
                    <li className="footer-company-two">Politics</li>
                    <li className="footer-company-three">Issues</li>
                </ul>
                <ul className="footer-product-container">
                    <h3 className="product title">WHAT YOU CAN DO</h3>
                    <li className="footer-product-one">Share Issues</li>
                    <li className="footer-product-two">Debate</li>
                    <li className="footer-product-three">Express Opinions</li>
                    <li className="footer-product-four">Memorize</li>
                </ul>
                <ul className="footer-resources-container">
                    <h3 className="resources title">CREATED BY</h3>
                    <li className="footer-resources-one">Ju Yeop Jang</li>
                    <li className="footer-resources-two">Sung Hyun Kim</li>
                    <li className="footer-resources-two">Kwak Minwoo</li>
                    <li className="footer-resources-two">Kyu Jin Lee</li>
                </ul>
                <ul className="footer-team-container">
                    <h3 className="team title">TEAMMEMBERS</h3>
                    <li className="footer-team-one">
                        <p className="footer-team-front">Front-End</p>
                        <a className="sunghyun" href="https://github.com/constate93"><img src="https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/users-2.svg"></img></a>
                        <a className="minwoo" href=""><img src="https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/users-11.svg"></img></a>
                        <a className="kyujin" href="https://github.com/dlrbwls0302"><img src="https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/users-13.svg"></img></a>
                    </li>
                    <li className="footer-team-two">
                        <p className="footer-team-back">Back-End</p>
                        <a className="juyeop" href="https://github.com/jangjuyeop"><img src="https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/users-9.svg"></img></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;