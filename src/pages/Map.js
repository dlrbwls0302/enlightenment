import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import '../styles/Map.css';
import KakaoMap from '../components/KakaoMap'
import Draggable from 'react-draggable';

const Map = () => {
    const state = useSelector((state) => {
        return state.electionsReducer
    })
    
    const [markerPositions, setMarkerPositions] = useState([]);
    const [markerPlaceNames, setMarkerPlaceNames] = useState([]);
    const [sgId, setSgId] = useState('');
    const [sdName, setSdName] = useState('');
    const [wiwName, setWiwName] = useState('');
    const [mapSize, setMapSize] = useState([400, 400]);
    const [downtowns, setDowntowns] = useState([]);
    const [isDrag, setDrag] = useState(false);
  

    const handleDowntowns = (e) => {
        if(e.target.value === '시, 도 선택'){
            return;
        }
        handleSdName(e)
        const changedDowntowns = state.korea.filter(item => {
            return item.city === e.target.value
        })
        setDowntowns(changedDowntowns[0].downtowns)
        
    }

    const handleSgId = (e) => {
        setSgId(e.target.value)
    }
    
    const handleSdName = (e) => {
        setSdName(e.target.value)    
    }
    const handleWiwName = (e) => {
        setWiwName(e.target.value.replace("\u001d", ""))
    }
 
    const getPlaces = () => {
        axios.post('http://localhost:5000/map/places', {
            sgId,
            sdName,
            wiwName
        },
        {
            headers: { "Content-Type": "application/json" },
        }
        )
        .then(res => {
            const places = res.data.map(place => place.addr)
            const placeNames = res.data.map(place => place.placeName)
            setMarkerPlaceNames(placeNames)
            const positions = []
            places.forEach((place, i) => {
                fetch(`https://dapi.kakao.com/v2/local/search/address?query=${place}`, {
                    headers: {
                        'Authorization': 'KakaoAK 804d239e2529038f08230bcfcf217433'
                    }
                })
                .then(res => res.json())
                .then(json => {
                    let coordinate = []
                    coordinate.push(Number(json.documents[0].address.y))
                    coordinate.push(Number(json.documents[0].address.x))
                    positions.push(coordinate)
                    return positions
                })
                .then(positions => {
                    if (i === 9) {
                        setMarkerPositions(positions)
                    }  
                })
            })
        })
    }
    
    const onStart = ()=> {
        setDrag(true);
    }
    const onStop = () => {
        setDrag(false);
    }

    const handleLogout = () => {
        fetch('http://localhost:5000/auth/google/logout', {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(json => console.log(json))
    }

    return (
        <div className="map-page-desktop">
            <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null}
            grid={[1, 1]}
            scale={1}
            onStart={onStart}
            onStop={onStop}
            >
            <div className={isDrag ? "map-condition-desktop handle active" : "map-condition-desktop handle"}>
                <div className='heading'>당신의 선택</div>
                <div className="election-wrapper-desktop">
                    <select onChange={handleSgId} defaultValue="선거선택">
                        <option>선거 선택</option>
                        {state.elections.map((election, index) => {
                            return <option key={index} value={election.sgId}>{election.sgName}</option>
                        })}
                    </select>
                </div>
                <div className="sdName-wrapper-desktop">
                    <select onChange={handleDowntowns} defaultValue="시, 도 선택">
                        <option>시, 도 선택</option>
                        {state.korea.map((item, index) => {
                            return <option key={index} value={item.city}>{item.city}</option>
                        })}
                    </select>
                </div>
                <div className="wiwName-wrapper-desktop">
                    <select onChange={handleWiwName} defaultValue="구, 군 선택">
                        <option>구, 군 선택</option>
                        {downtowns.length === 0 ? 
                            <></> :
                            downtowns.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                    </select>
                </div>
                <div className="button-wrapper-desktop">
                    <a href='#' onClick={getPlaces}>
                        내 주변 투표소 찾기
                        <div className='wave'></div>
                    </a>
                </div>
                {/* <a href="http://localhost:5000/auth/google/login">로그인</a>
                <button onClick={handleLogout}>로그아웃</button> */}
            </div>
            </Draggable>
            <div className="map-box-desktop">
                <KakaoMap markerPositions={markerPositions} markerPlaceNames={markerPlaceNames} size={mapSize}/>
            </div>
        </div>
    )
};

export default Map;