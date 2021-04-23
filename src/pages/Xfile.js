import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Magazine from '../components/Magazine';
import '../styles/Xfile copy.css';
import diffrentMagazine from '../images/diffrentMagazine.mp4';

const Xfile = () => {

    const [magazineList, setMagazineList] = useState([]);
    const [isLoading, setLoading] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/magazines')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMagazineList(data.magazines);
                console.log('magazineList : ', magazineList);
            })
    }, []);

    // "id": 5,
    //         "userId": 1,
    //         "title": "메인 타이틀5",
    //         "description": "<p>테스트 글 작성5</p><figure class=\"image\"><img src=\"https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/1619004025660_magazine.jpeg\"></figure>",
    //         "like": 0,
    //         "createdAt": "2021-04-21T11:39:51.000Z",
    //         "images": []
    const upToScroll = () => {
        window.scrollTo(0, 0);
    }

    const getImage = (desc) => {

    }
    return (
        <div className='main-container'>
            <div className="xfile-wrap">
                <div className="xfile-text-wrap">
                    <ul className="xfile-text-ul">
                        <li className="xfile-text-li">HOT MAGAZINE</li>
                        <li className="xfile-text-li">NEW MAGAZINE</li>
                        <li className="xfile-text-li">MY MAGAZINE</li>
                    </ul>
                    <div className="search-magazine">search</div>
                </div>
                <div className="xfile-content-wrap">
                    <div class="magazine-wrap">
                        {magazineList.length === 0 ? <Magazine key={1} like="9999" title="로딩중" /> :
                            magazineList.map((child, index) => {
                                let findIndex = child.description.indexOf('images/') + 7
                                console.log(findIndex);
                                let find = child.description.slice(findIndex);
                                // console.log("find", find);
                                const findIndex2 = find.indexOf('"');
                                const value = find.slice(0, findIndex2);
                                console.log("value", value);
                                return <Magazine key={index} like={child.like} title={child.title} value={value} />
                            })
                        }
                    </div>
                    {/* <div className="lastMagazine" onClick={upToScroll}>
                        <video muted autoPlay loop>
                            <source src={diffrentMagazine} type="video/mp4" />
                        </video>
                        <p className="magazine-lastTitle">다른 매거진 보기</p>
                    </div> */}
                </div>
            </div>

        </div>
    );
};


export default Xfile;