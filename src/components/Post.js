import React, { useState } from 'react';
import '../styles/Post.css';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';

const Post = ({ title, like, description }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='post-container'>
            <div className='post-show'>
                <h1 className='post-heading'>{title}</h1>
                <div className='post-info'>
                    <div className='post-info-one'>
                        <div className='post-user-id'>codestates@gmail.com</div>
                        <div className='post-user-id'>2021-04-20</div>
                    </div>
                    <div className='post-info-two'>
                        <div className='post-user-id' onClick={() => { setToggle(!toggle) }}>
                            {toggle ? <FcLike /> : <FcLikePlaceholder />}
                        </div>
                        <div className='post-user-id'>{like}</div>
                        <div className='post-user-id'>수정</div>
                        <div className='post-user-id'>삭제</div>
                    </div>
                </div>
                <div className='post-main-content' dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </div>
    );
};

export default Post;