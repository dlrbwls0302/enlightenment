import React, { useState } from 'react';
import '../styles/Post.css';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';

const Post = ({ title, like, description, createdAt }) => {
    const [toggle, setToggle] = useState(false);
    createdAt = createdAt.slice(0, 10);
    return (
        <div className="post-container">
            <div className="post-info-wrap">
                <h1 className="post-title">{title}</h1>
                <div className="post-infomation">
                    <p className="post-likeBtn" onClick={() => { setToggle(!toggle) }}>
                        {toggle ? <FcLike /> : <FcLikePlaceholder />}
                    </p>
                    <span className="post-like">{like}</span>
                    <span className="post-modify">수정</span>
                    <span className="post-delete">삭제</span>
                    <div className="post-created-date">{createdAt}</div>
                </div>
            </div>
            <div className="post-main-content" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div >
    );
};

export default Post;