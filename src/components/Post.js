import React, { useState } from 'react';
import '../styles/Post.css';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const Post = ({ id, title, like, description, createdAt, handleTogleHotMagazine, userId, magazineUserId, dislikeHandler, likeHandler }) => {
    const [toggle, setToggle] = useState(false);
    const deletePost = () => {
        fetch(`https://server.yonyeosuk.link/magazines/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => {
                if (res.status === 200) {
                    handleTogleHotMagazine()
                }
            })
    }

    const upToScroll = () => {
        window.scrollTo(0, 0);
    }

    createdAt = createdAt.slice(0, 10);
    return (

        <div className="post-container">
            <div className="post-info-wrap">
                <RiArrowGoBackFill className="write-back" onClick={() => { handleTogleHotMagazine() }} />
                <h1 className="post-title">{title}</h1>
                <div className="post-infomation">
                    <p className="post-likeBtn-wrap" onClick={() => { setToggle(!toggle) }}>
                        {toggle ? <FcLike className="post-likeBtn" onClick={() => {
                            dislikeHandler()
                            
                        }}/> : <FcLikePlaceholder className="post-likeBtn" onClick={() => {
                            likeHandler()
                        }}/>}
                    </p>
                    <span className="post-like-number">{like}</span>
                    <div className="post-created-date">{createdAt}</div>
                    {
                        userId === magazineUserId ? (
                            <div>
                                <span className="post-modify">수정하기</span>
                                <span className="post-delete" onClick={deletePost}>삭제하기</span>
                            </div>

                        ) : <></>
                    }
                </div>
            </div>
            <div className="post-main-content" dangerouslySetInnerHTML={{ __html: description }}></div>
            <AiOutlineVerticalAlignTop className="post-upscroll" onClick={upToScroll} />
        </div >

    );
};

export default Post;