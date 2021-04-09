import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import '../styles/Map.css';
import KakaoMap from '../components/KakaoMap'
// import { createPortal } from 'react-dom';

const Map = () => {
    const state = useSelector((state) => {
        return state.electionsReducer
    })
    const [markerPositions, setMarkerPositions] = useState([])
    ////
    // const [places, setPlaces] = useState([]);
    const [sgId, setSgId] = useState('');
    const [sdName, setSdName] = useState('');
    const [wiwName, setWiwName] = useState('');
    const [mapSize, setMapSize] = useState([400, 400]);
    const markerPositions1 = [
        [33.452278, 126.567803],
        [33.452671, 126.574792],
        [33.451744, 126.572441]
    ];
    const markerPositions2 = [
        [37.499590490909185, 127.0263723554437],
        [37.499427948430814, 127.02794423197847],
        [37.498553760499505, 127.02882598822454],
        [37.497625593121384, 127.02935713582038],
        [37.49629291770947, 127.02587362608637],
        [37.49754540521486, 127.02546694890695],
        [37.49646391248451, 127.02675574250912]
    ]; 
    
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
        
        axios.post('http://ec2-3-34-52-239.ap-northeast-2.compute.amazonaws.com:5000/map/places', {
            sgId,
            sdName,
            wiwName
        },
        // {
        //     headers: { "Content-Type": "application/json" },
        // }
        )
        .then(res => {
            const places = res.data.map(place => place.addr['_text'])
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
    return (
        <div id="map-page">
            <div id="map-condition">
                <select onChange={handleSgId} defaultValue="선거선택">
                    <option>선거선택</option>
                    {state.elections.map((election, index) => {
                        return <option key={index} value={election.sgId['_text']}>{election.sgName['_text']}</option>
                    })}
                </select>
                <input value={sdName} placeholder={'서울특별시'} onChange={handleSdName}></input>
                <input value={wiwName} placeholder={'종로구'} onChange={handleWiwName}></input>
                <button onClick={getPlaces}>내 주변 투표소 찾기</button>
            </div>
            <div id="map-box">
                <KakaoMap markerPositions={markerPositions} size={mapSize}/>
            </div>
        </div>
    )
};

export default Map;