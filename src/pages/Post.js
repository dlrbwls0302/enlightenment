import React, { useState } from 'react';
import '../styles/Post.css';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';

const Post = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='post-container'>
            <div className='post-show'>
                <div className='post-new-container'>
                    <Link to={'/write'} className='post-new'>
                            새 글 작성하기
                    </Link>
                </div>
                
                <h1 className='post-heading'>LH 사건에 대해 알아보도록 하겠습니다. 제목이 이렇습니다.</h1>
                <div className='post-info'>
                    <div className='post-info-one'>
                        <div className='post-user-id'>codestates@gmail.com</div>
                        <div className='post-user-id'>2021-04-20</div>
                    </div>
                    <div className='post-info-two'>
                        <div className='post-user-id' onClick={() => {setToggle(!toggle)}}>
                            {toggle? <FcLike /> : <FcLikePlaceholder />}
                        </div>
                        <div className='post-user-id'>0</div>
                        <div className='post-user-id'>수정</div>
                        <div className='post-user-id'>삭제</div>
                    </div>
                </div>
                <div className='post-main-content'>hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구hello 어쩌구 저쩌구</div>
            </div>
        </div>
    );
};

export default Post;