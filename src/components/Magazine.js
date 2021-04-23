import React from 'react';
import { AiFillHeart } from 'react-icons/ai';


const Magazine = ({ like, title, value, description, handleTogleMagazine }) => {
    const url = "https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/"
    return (
        <div className="magazine" onClick={() => handleTogleMagazine(title, description, like)} style={value === undefined ? { backgroundImage: "https://i.pinimg.com/474x/7d/50/32/7d50327a90bb40ef46f7ef2338ae1f36.jpg" } :
            { backgroundImage: `url(${url}${value})` }}>
            <AiFillHeart className="magazine-heart" color="#d32f2f"></AiFillHeart>
            <p className="magazine-heart-count">{like}</p>
            <p className="magazine-title">{title}</p>
        </div>

    )
}

export default Magazine;