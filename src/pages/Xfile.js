import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Magazine from '../components/Magazine';
import '../styles/Xfile.css';
import Write from '../components/Write';
import Post from '../components/Post';

const Xfile = () => {
    const [magazineList, setMagazineList] = useState([]);
    const [togleMagazine, setTogleMagazine] = useState(false);
    const [togleHotMagazine, setTogleHotMagazine] = useState(false);
    const [togleNewMagazine, setTogleNewMagazine] = useState(false);
    const [togleWrite, setTogleWrite] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [like, setLike] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const diffrentMagazine = "https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/diffrentMagazine.mp4";

    useEffect(() => {
        fetch('http://localhost:5000/magazines')
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                setMagazineList(data.magazines);
                // console.log('magazineList : ', magazineList);
                console.log('render-Xfile-page');
                console.log(data.magazines);
            })
    }, [togleHotMagazine]);

    const handleTogleMagazine = (title, description, like, createdAt) => {
        upToScroll();
        setTitle(title);
        setDescription(description);
        setLike(like);
        setCreatedAt(createdAt);
        setTogleHotMagazine(false);
        setTogleWrite(false);
        setTogleMagazine(true);

    }

    const handleTogleWrite = () => {
        setTogleHotMagazine(false);
        setTogleWrite(true);
        console.log('handleTogleWrite');
    }

    const handleTogleHotMagazine = () => {
        if (togleWrite && !togleHotMagazine) {
            if (window.confirm('작성중인 글이 사라집니다. 정말 나가시겠습니까?')) {
                // setTogleMagazine(false);
                setTogleWrite(false);
                setTogleMagazine(false);
                setTogleHotMagazine(true);
                console.log('handleTogleHotMagazine');
            } else {
                return;
            }
        } else {
            setTogleMagazine(false);
            setTogleHotMagazine(true);
            console.log('handleTogleHotMagazine');
        }
    }

    const upToScroll = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className='main-container'>
            <div className="xfile-wrap">
                <div className="xfile-text-wrap">
                    <ul className="xfile-text-ul">
                        <li className="xfile-text-li" onClick={handleTogleHotMagazine}>HOT MAGAZINE</li>
                        <li className="xfile-text-li">NEW MAGAZINE</li>
                        <li className="xfile-text-li">MY MAGAZINE</li>
                    </ul>
                    <div className="search-magazine">search</div>
                    <div className="write-magazine" onClick={handleTogleWrite}>WRITE</div>
                </div>
                {togleWrite ? <Write /> : togleMagazine ? <Post title={title} description={description} like={like} createdAt={createdAt} /> :
                    <div className="xfile-content-wrap">
                        <div className="magazine-wrap">
                            {magazineList.length === 0 ? <div className="loadingMessage">LOADING...</div> :
                                magazineList.map((child, index) => {
                                    let value = "";
                                    if (child.description.indexOf('images/') !== -1) {
                                        const findIndex = child.description.indexOf('images/') + 7
                                        const find = child.description.slice(findIndex);
                                        const findIndex2 = find.indexOf('"');
                                        value = find.slice(0, findIndex2);
                                    } else {
                                        value = undefined;
                                    }
                                    // if (index === 0) {
                                    //     console.log("0 value :", value);
                                    //     console.log("0 desc :", child.description);
                                    // }

                                    console.log(child.createdAt);
                                    return <Magazine key={index} index={index} like={child.like} title={child.title} value={value} description={child.description} createdAt={child.createdAt} handleTogleMagazine={handleTogleMagazine} />
                                })
                            }
                            {magazineList.length === 0 ? null :
                                <div className="lastMagazine" onClick={upToScroll}>
                                    <video muted autoPlay loop>
                                        <source src={diffrentMagazine} type="video/mp4" />
                                    </video>
                                    <p className="magazine-lastTitle">다른 매거진 보기</p>
                                </div>
                            }
                        </div>
                    </div>}

            </div>

        </div >
    );
};


export default Xfile;