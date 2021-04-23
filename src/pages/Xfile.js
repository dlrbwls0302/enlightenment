import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Magazine from '../components/Magazine';
import '../styles/Xfile.css';
// import diffrentMagazine from '../images/diffrentMagazine.mp4';
import Write from '../components/Write';
import Post from '../components/Post';

const Xfile = () => {

    const [magazineList, setMagazineList] = useState([]);
    const [togleMagazine, setTogleMagazine] = useState(false);
    const [togleHotMagazine, setTogleHotMagazine] = useState(false);
    const [togleWrite, setTogleWrite] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [like, setLike] = useState('');
    const ec2Url = 'http://ec2-3-34-52-239.ap-northeast-2.compute.amazonaws.com:5000';
    useEffect(() => {
        fetch(`${ec2Url}/magazines`)
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

    const handleTogleMagazine = (title, description, like) => {
        // console.log(e.target);
        setTitle(title);
        setDescription(description);
        setLike(like);
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
        if (togleWrite) {
            alert('작성중이던 글이 사라집니다');
            setTogleMagazine(false);
            setTogleWrite(false);
            setTogleHotMagazine(true);
            console.log('handleTogleHotMagazine');
        } else {
            setTogleMagazine(false);
            setTogleWrite(false);
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
                {togleWrite ? <Write /> : togleMagazine ? <Post title={title} description={description} like={like} /> :
                    <div className="xfile-content-wrap">
                        <div className="magazine-wrap">
                            {magazineList.length === 0 ? <Magazine key={1} like="9999" title="로딩중" /> :
                                magazineList.map((child, index) => {
                                    const findIndex = child.description.indexOf('images/') + 7
                                    const find = child.description.slice(findIndex);
                                    const findIndex2 = find.indexOf('"');
                                    const value = find.slice(0, findIndex2);
                                    return <Magazine key={index} like={child.like} title={child.title} value={value} description={child.description} handleTogleMagazine={handleTogleMagazine} />
                                })

                            }
                        </div>
                        {/* <div className="lastMagazine" onClick={upToScroll}>
                            <video muted autoPlay loop>
                                <source src={diffrentMagazine} type="video/mp4" />
                            </video>
                            <p className="magazine-lastTitle">다른 매거진 보기</p>
                        </div> */}
                    </div>}

            </div>

        </div >
    );
};


export default Xfile;