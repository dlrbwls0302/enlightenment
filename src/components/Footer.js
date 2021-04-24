import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-container">
                <h2 className="footer-logo-name">ENLIGHTENMENT</h2>
                <ul className="footer-company-container">
                    <h3 className="company title">COMPANY</h3>
                    <li className="footer-company-one">About Us</li>
                    <li className="footer-company-two">Jobs</li>
                    <li className="footer-company-three">Contact</li>
                </ul>
                <ul className="footer-product-container">
                    <h3 className="product title">PRODUCT</h3>
                    <li className="footer-product-one">Features</li>
                    <li className="footer-product-two">Pricing</li>
                    <li className="footer-product-three">Apps</li>
                    <li className="footer-product-four">Support</li>
                </ul>
                <ul className="footer-resources-container">
                    <h3 className="resources title">RESOURCES</h3>
                    <li className="footer-resources-one">Education</li>
                    <li className="footer-resources-two">Work</li>
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