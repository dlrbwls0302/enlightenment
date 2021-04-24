import React, { useState } from 'react';
import '../styles/Post.css';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';

const Post = ({ id, title, like, description, createdAt, handleTogleHotMagazine, userId, magazineUserId }) => {
    const [toggle, setToggle] = useState(false);
    console.log(id)
    const handleTogleLikeBtn = () => {
        fetch('http://localhost:5000/magazines')
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                // setMagazineList(data.magazines);
            })
    };
    const deletePost = () => {
        fetch(`http://localhost:5000/magazines/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res => {
            if (res.status === 200) {
                handleTogleHotMagazine()
            }
        })
    }
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
                        {
                            userId === magazineUserId ? (
                            <div>
                                <span className="post-modify">수정</span>
                                <span className="post-delete" onClick={deletePost}>삭제</span>
                            </div>

                            ) : <></>    
                        }
                        <div className="post-created-date">{createdAt}</div>
                    </div>
                </div>
                <div className="post-main-content" dangerouslySetInnerHTML={{ __html: description }}></div>
                    <button onClick={() => {
                        handleTogleHotMagazine()
                    }}>
                        뒤로가기
                    </button>
            </div >
        
    );
};

export default Post;