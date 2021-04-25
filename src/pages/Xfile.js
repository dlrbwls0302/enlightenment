import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import Magazine from '../components/Magazine';
import '../styles/Xfile.css';
import Write from '../components/Write';
import Post from '../components/Post';

const Xfile = ({isLogin, userId}) => {
    const [magazineList, setMagazineList] = useState([]);
    const [togleMagazine, setTogleMagazine] = useState(false);
    const [togleHotMagazine, setTogleHotMagazine] = useState(false);
    const [togleNewMagazine, setTogleNewMagazine] = useState(false);
    const [togleHotMagazine, setTogleHotMagazine] = useState(true);
    // const [togleNewMagazine, setTogleNewMagazine] = useState(false);
    const [togleWrite, setTogleWrite] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [like, setLike] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const diffrentMagazine = "https://s3.ap-northeast-2.amazonaws.com/www.kelection.ml/images/diffrentMagazine.mp4";
    const [myMagazines, setMyMagazines] = useState([]);
    const [magazineId, setMagazineId] = useState(0);
    const [magazineUserId, setMagazineUserId] = useState(0);
    const [toggleMyMagazine, setToggleMyMagazine] = useState(false);
    const [toggleNewMagazines, setToggleNewMagazines] = useState(false);
    const [query, setQuery] = useState('');
    console.log(query)
    useEffect(() => {
        return function() {
            console.log()
        }
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/magazines')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMagazineList(data.magazines);
                // console.log('magazineList : ', magazineList);
                // console.log(data.magazines)
                const meMagazines = data.magazines.filter(magazine => {
                    return magazine.userId === userId
                })
                setMyMagazines(meMagazines)
                
            })
    }, []);

    useEffect(() => {
        setToggleMyMagazine(false);
        const queriedMagazines = magazineList.filter(magazine => {
            return magazine.title.includes(query);
        })
        setMagazineList(queriedMagazines);
    }, [query])

    const handleTogleMagazine = (id, userId, title, description, like, createdAt) => {
        upToScroll();
        setMagazineId(id);
        setMagazineUserId(userId)
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
        setToggleMyMagazine(false);
        setToggleNewMagazines(false);
        setTogleWrite(true);
        console.log('handleTogleWrite');
    }

    const handleTogleHotMagazine = () => {
        // setToggleMyMagazine(false);
        setToggleNewMagazines(false);
        setToggleMyMagazine(false);
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
            setTogleHotMagazine(true);
            const sortedMagazines = magazineList.sort((a, b) => b.like - a.like);
            setMagazineList(JSON.parse(JSON.stringify(sortedMagazines)));
            setTogleMagazine(false);
        }
    }
    const handleWriteToMymagazine = () => {
        if (togleWrite) {
            if (window.confirm('작성중인 글이 사라집니다. 정말 나가시겠습니까?')) {
                setTogleWrite(false);
                setTogleMagazine(false);
                setToggleMyMagazine(true);
            } 
        } else {

        }
    }
    const selectIndex = (totalIndex, selectingNumber) => {
        let randomIndexArray = []
        for (let i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
          let randomNum = Math.floor(Math.random() * totalIndex)
          if (randomIndexArray.indexOf(randomNum) === -1) {
            randomIndexArray.push(randomNum)
          } else { //if the randomNum is already in the array retry
            i--
          }
        }
        return randomIndexArray
      }
      
    const pickNewmagazine = (list) => {
        let newMagazine = [];
        let randomIndex = [];
        if (list.length > 20) {
            randomIndex = selectIndex(list.length, 20)    
            randomIndex = randomIndex.slice(0, 20) 
            for (let i = 0; i <= randomIndex.length; i++) {
                newMagazine.push(list[randomIndex[i]])
            }
        } else {
            randomIndex = selectIndex(list.length, list.length)   
            console.log(randomIndex)
            for (let i = 0; i <= randomIndex.length; i++) {
                newMagazine.push(list[randomIndex[i]])
            }
        }
        return newMagazine
    }

    const handleWriteToNewmagazine = () => {
        if (togleWrite) {
            if (window.confirm('작성중인 글이 사라집니다. 정말 나가시겠습니까?')) {
                setTogleWrite(false);
                let randomList =  pickNewmagazine(magazineList)
                randomList = randomList.slice(0, randomList.length - 1)
                setMagazineList(randomList)              
                setToggleNewMagazines(true);
            }
        } else if(!togleWrite){
            setTogleMagazine(false);    
            setToggleMyMagazine(false); 
            // const newMagazines = magazineList.reverse();
            // console.log(newMagazines)
            // setMagazineList(newMagazines.slice(0, 20));
            let randomList =  pickNewmagazine(magazineList)
            randomList = randomList.slice(0, randomList.length - 1)
            setMagazineList(randomList)
            setToggleNewMagazines(true); 
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
                        <li className="xfile-text-li" onClick={() => {
                            // if (toggleNewMagazines) return;
                            handleWriteToNewmagazine();
                            // const newMagazines = magazineList.reverse();
                            // setToggleNewMagazines(true);
                            // setToggleMyMagazine(false);
                            // setMagazineList(newMagazines.slice(0, 20));
                        }}>NEW MAGAZINE</li>
                        { isLogin ?
                        <li className="xfile-text-li" onClick={() => {
                            handleWriteToMymagazine();
                            setToggleNewMagazines(false);
                            setToggleMyMagazine(true);
                        }}>MY MAGAZINE</li> : null
                    }
                    </ul>
                    <div className="write-magazine" onClick={() => {
                        handleTogleWrite()
                        setToggleNewMagazines(false);
                        setToggleMyMagazine(false);
                    }} >WRITE</div>
                </div>
                {togleWrite ? <Write handleTogleMagazine={handleTogleMagazine} handleTogleHotMagazine={handleTogleHotMagazine} /> : togleMagazine ? <Post id={magazineId} magazineUserId={magazineUserId} title={title} description={description} like={like} createdAt={createdAt} handleTogleHotMagazine={handleTogleHotMagazine} isLogin={isLogin} userId={userId}/> :
                    <div className="xfile-content-wrap">
                        <div className="magazine-wrap">
                            <input placeholder="검색" type="text" onChange={(e) => setQuery(e.target.value)}></input>
                            { 
                                isLogin && toggleMyMagazine && myMagazines.length !== 0 ? myMagazines.map((child, index) => {
                                    let value = "";
                                    if (child.description.indexOf('images/') !== -1) {
                                        const findIndex = child.description.indexOf('images/') + 7
                                        const find = child.description.slice(findIndex);
                                        const findIndex2 = find.indexOf('"');
                                        value = find.slice(0, findIndex2);
                                    } else {
                                        value = undefined;
                                    }
                                    
                                    return <Magazine key={index} index={index} id={child.id} userId={child.userId} like={child.like} title={child.title} value={value} description={child.description} createdAt={child.createdAt} handleTogleMagazine={handleTogleMagazine} />
                                }) : 
                            
                            magazineList.length === 0 ? <div className="loadingMessage">LOADING...</div> :
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
                                    console.log(child.id)
                                    
                                    return <Magazine key={index} index={index} id={child.id} magazineUserId={child.userId} like={child.like} title={child.title} value={value} description={child.description} createdAt={child.createdAt} handleTogleMagazine={handleTogleMagazine} />
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
                        <Write handleTogleMagazine={handleTogleMagazine} handleTogleHotMagazine={handleTogleHotMagazine} />
                    </div>
                    : togleMagazine ?
                        <Post id={magazineId} magazineUserId={magazineUserId} title={title} description={description} like={like} createdAt={createdAt} handleTogleHotMagazine={handleTogleHotMagazine} isLogin={isLogin} userId={userId} dislikeHandler={dislikeHandler} likeHandler={likeHandler}/>
                        : <div className="xfile-content-wrap">
                            <div className="magazine-wrap">
                                {
                                 filteredMagazines.length !== 0 && query !== '' ? filteredMagazines.map((child, index) => {
                                        let value = "";
                                        let shortTitle = null;
                                        if (child.description.indexOf('images/') !== -1) {
                                            const findIndex = child.description.indexOf('images/') + 7
                                            const find = child.description.slice(findIndex);
                                            const findIndex2 = find.indexOf('"');
                                            value = find.slice(0, findIndex2);
                                        } else {
                                            value = undefined;
                                        }

                                        if (child.title.length > 40) {
                                            shortTitle = `${child.title.slice(0, 40)}...`;
                                        }
                                        return <Magazine key={index} index={index} id={child.id} userId={child.userId} magazineUserId={child.userId} like={child.like} shortTitle={shortTitle} title={child.title} value={value} description={child.description} createdAt={child.createdAt} handleTogleMagazine={handleTogleMagazine} />
                                    }) : 


                                    toggleMyMagazine && myMagazines.length !== 0 ? myMagazines.map((child, index) => {
                                        let value = "";
                                        let shortTitle = null;
                                        if (child.description.indexOf('images/') !== -1) {
                                            const findIndex = child.description.indexOf('images/') + 7
                                            const find = child.description.slice(findIndex);
                                            const findIndex2 = find.indexOf('"');
                                            value = find.slice(0, findIndex2);
                                        } else {
                                            value = undefined;
                                        }

                                        if (child.title.length > 40) {
                                            shortTitle = `${child.title.slice(0, 40)}...`;
                                        }
                                        return <Magazine key={index} index={index} id={child.id} userId={child.userId} magazineUserId={child.userId} like={child.like} shortTitle={shortTitle} title={child.title} value={value} description={child.description} createdAt={child.createdAt} handleTogleMagazine={handleTogleMagazine} />
                                    }) :
                                        magazineList.length === 0 ? <div className="loadingMessage">LOADING...</div> :
                                            magazineList.map((child, index) => {
                                                let value = "";
                                                let shortTitle = null;
                                                if (child.description.indexOf('images/') !== -1) {
                                                    const findIndex = child.description.indexOf('images/') + 7
                                                    const find = child.description.slice(findIndex);
                                                    const findIndex2 = find.indexOf('"');
                                                    value = find.slice(0, findIndex2);
                                                } else {
                                                    value = undefined;
                                                }

                                                if (child.title.length > 40) {
                                                    shortTitle = `${child.title.slice(0, 40)}...`;
                                                }

                                                return <Magazine key={index} index={index} id={child.id} magazineUserId={child.userId} like={child.like} shortTitle={shortTitle} title={child.title} value={value} description={child.description} createdAt={child.createdAt} handleTogleMagazine={handleTogleMagazine} />
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