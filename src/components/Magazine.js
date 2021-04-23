import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Magazine = ({ index, id, magazineUserId, like, title, value, description, createdAt, handleTogleMagazine }) => {
    const imgUrl = "https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/";
    const dummyImg = `https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/dummyImg${index <= 10 ? index : index % 10}.jpeg`;
    // http://localhost:5000/magazines/:magazineId/like
    return (
        <div className="magazine" onClick={() => handleTogleMagazine(id, magazineUserId, title, description, like, createdAt)} style={value === undefined ? { backgroundImage: `url(${dummyImg})` } :
            { backgroundImage: `url(${imgUrl}${value})` }}>
            <AiFillHeart className="magazine-heart" color="#d32f2f"></AiFillHeart>
            <p className="magazine-heart-count">{like}</p>
            <p className="magazine-title">{title}</p>
        </div>

    )
}

export default Magazine;