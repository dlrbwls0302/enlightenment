import React from 'react';
import { AiFillHeart } from 'react-icons/ai';


const Magazine = ({ like, title, value }) => {
    const upToScroll = () => {
        window.scrollTo(0, 0);
    }
    const url = "https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/"
    return (
        <div className="magazine" style={{ backgroundImage: `url(${url}${value})` }}>
            <AiFillHeart className="magazine-heart" color="#d32f2f"></AiFillHeart>
            <p className="magazine-heart-count">{like}</p>
            <p className="magazine-title">{title}</p>
        </div>

    )
}

export default Magazine;