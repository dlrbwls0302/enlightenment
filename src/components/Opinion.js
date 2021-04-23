import React, { useRef } from 'react';
import axios from 'axios';
import '../styles/Opinions.css'
import { AiFillAlert, AiTwotoneLike } from 'react-icons/ai';
import { MdInsertEmoticon } from "react-icons/md";


const Opinion = ({ comment, ban, number, like }) => {
    const smileIcon = <MdInsertEmoticon />
    let className = '';
    let nickName = '';
    // const likeRef = useRef('white');
    if (!like) {
        if (number === 1 || number === 22 || number === 55) {
            nickName = '😇 SPECIAL';
            className = 'opinions special';
        } else {
            if (number % 10 === 0) {
                nickName = '😎 똑똑한 시민님';
                className = 'opinions yellow';
            } else if (number % 2 === 0) {
<<<<<<< HEAD
                nickName = '냉철한 시민님';
=======
                nickName = '😃 냉철한 시민님';
>>>>>>> 4167326526d5647ff21ffd53a0ed5e19d755bcec
                className = 'opinions blue';
            } else if (number % 10 === 3) {
                nickName = '🤔 현명한 시민님';
                className = 'opinions red';
            } else if (number % 10 === 5) {
                nickName = '🤗 훌륭한 시민님';
                className = 'opinions orange';
            } else {
                nickName = '🧐 똑똑한 시민님';
                className = 'opinions purple';
            }
        }
    } else {
        if (like < 10) {
            nickName = '😇 관심받는 의견';
            className = 'opinions fivelike';
        } else {
            nickName = '🤍 HOT OPINION';
            className = 'opinions tenlike';
        }
    }


    const handleReportBtn = () => {
        const config = {
            method: 'put',
            url: `http://localhost:5000/comment/${number}/ban`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "commentId": number,
            })
        };

        axios(config)
            .then(response => {
                console.log(response);
                alert('신고되었습니다');
            })
            .catch(error => {
                console.log(error);
                alert('신고누적이 초과되었습니다');
            })
    }

    const handleLikeBtn = () => {
        const config = {
            method: 'put',
            url: `http://localhost:5000/comment/${number}/like`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "commentId": number,
            })
        };

        axios(config)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            {ban < 5 ?
                <div className={className}>
                    <AiFillAlert className="reportImg like" title="신고하기" onClick={handleReportBtn} />
                    <AiTwotoneLike className="reportImg report" onClick={handleLikeBtn} />
                    <p className="comment-nickname">{nickName}</p>
                    <p className="comment-like">{like}</p>
                    <p className="anooComment">{comment}</p>
                </div > : null}
        </>
    );
};

export default Opinion;