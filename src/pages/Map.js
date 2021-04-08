/*global kakao*/ 
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import '../styles/Map.css';
import KakaoMap from '../components/KakaoMap'

const Map = () => {
    const state = useSelector((state) => {
        return state.electionsReducer
    })
    const [markerPositions, setMarkerPositions] = useState([])
    const [places, setPlaces] = useState([]);
    const [sgId, setSgId] = useState('');
    const [sdName, setSdName] = useState('');
    const [wiwName, setWiwName] = useState('');
    const handleSdName = (e) => {
        setSdName(e.target.value)    
    }
    const handleWiwName = (e) => {
        setWiwName(e.target.value)
    }
    const handleSgId = (e) => {
        setSgId(e.target.value)
    }
    const getPlaces = () => {
        axios.post('http://localhost:5000/map/places', {
            sgId,
            sdName,
            wiwName
        },
        {
            headers: { "Content-Type": "application/json" },
        })
        .then(res => {
            const places = res.data.map(place => place.addr['_text'])
            setPlaces(places)
            let positions = []
            for (let i = 0; i < places.length; i++) {
                fetch(`https://dapi.kakao.com/v2/local/search/address?query=${places[i]}`, {
                    headers: {
                        'Authorization': 'KakaoAK 804d239e2529038f08230bcfcf217433'
                    }
                })
                .then(res => res.json())
                .then(json => {
                    let coordinate = [Number(json.documents[0]['road_address']['x']), Number(json.documents[0]['road_address']['y'])]
                    positions.push(coordinate)
                })
            }
            setMarkerPositions(positions)
        });
    }
    return (
        <div>
            <div>
                <select onChange={handleSgId} defaultValue="선거선택">
                    <option>선거선택</option>
                    {state.elections.map((election, index) => {
                        return <option key={index} value={election.sgId['_text']}>{election.sgName['_text']}</option>
                    })}
                </select>
                <input value={sdName} placeholder={'서울특별시'} onChange={handleSdName}></input>
                <input value={wiwName} placeholder={'종로구'} onChange={handleWiwName}></input>
                <button onClick={() => getPlaces()}>내 주변 투표소 찾기</button>
            </div>
            <div>
                <KakaoMap markerPositions={markerPositions}/>
            </div>
        </div>
    )
};

export default Map;