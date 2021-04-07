/*global kakao*/ 
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import '../styles/Map.css';

const Map = () => {
    useEffect(() => {
        const script = document.createElement("script");
        // script.async = true;
        script.type="text/javascript"
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=42fd2490b6fb3cab847c174c6cbcc102&autoload=false&libraries=services";
        script.id = 'mapScript'
        document.head.appendChild(script);
        let container = document.getElementById("map");
        script.onload = () => {
            kakao.maps.load(() => {        
                let options = {
                    center: new kakao.maps.LatLng(37.506502, 127.053617),
                    level: 3
                };
                const map = new kakao.maps.Map(container, options);
            });
        };
    }, [])
    const state = useSelector((state) => {
        return state.electionsReducer
    })
    const [places, setPlaces] = useState([]);
    const [sgId, setSgId] = useState(null);
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
    const setCoordinate = (x, y) => {
        return { 
            latlng: new kakao.maps.LatLng(x, y)
        }
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
            // let mapScript = document.getElementById('mapScript')
            // console.dir(mapScript)
            // let mapBox = document.getElementById('map')
            let container = document.getElementById("map");
            const places = res.data.item.map(place => place.addr['_text'])
            let positions = []
            setPlaces(places)
            for (let i = 0; i < places.length; i++) {
                fetch(`https://dapi.kakao.com/v2/local/search/address?query=${places[i]}`, {
                    headers: {
                        'Authorization': 'KakaoAK 804d239e2529038f08230bcfcf217433'
                    }
                })
                .then(res => res.json())
                .then(json => {
                    let coordinate = setCoordinate(json.documents[0]['road_address']['x'], json.documents[0]['road_address']['y'])
                    positions.push(coordinate)
                })
            }
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
            let options = {
                center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
                level: 9,
              };
          
              //map

            for (let i = 0; i < positions.length; i++) {

                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35);

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: container, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    image: markerImage // 마커 이미지 
                });
                marker.setMap(container)
            }
        })
    }
    return (
        <div>
            <div>
                <select placeholder={'안녕하세요'} onChange={handleSgId}>
                    {state.elections.map((election, index) => {
                        return <option key={index} value={election.sgId['_text']}>{election.sgName['_text']}</option>
                    })}
                </select>
                <input value={sdName} placeholder={'서울특별시'} onChange={handleSdName}></input>
                <input value={wiwName} placeholder={'종로구'} onChange={handleWiwName}></input>
                <button onClick={getPlaces}>내 주변 투표소 찾기</button>
            </div>
            <div>
                <div id="map"></div>
            </div>
        </div>
    )
};

export default Map;