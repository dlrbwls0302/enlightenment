/*global kakao*/
import React, { useEffect, useState, useRef } from 'react';
const KakaoMap = (props) => {
    let { markerPositions, markerPlaceNames } = props;
    const [kakaoMap, setKakaoMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const container = useRef();
    
    useEffect(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 3
        };
      const map = new kakao.maps.Map(container.current, options);
        setKakaoMap(map);
    }, [container]);

    useEffect(() => {
        if (kakaoMap === null) {
          return;
        }
        const center = kakaoMap.getCenter();
        kakaoMap.relayout();
        kakaoMap.setCenter(center);
        //
    }, [kakaoMap])
    ////
    useEffect(() => {
        if (kakaoMap === null) {
          return;
        }
        const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));
    
        setMarkers(markers => {
          // clear prev markers
            markers.forEach(marker => marker.setMap(null));
            ////////
          // assign new markers
            return positions.map(
              (position, i) => {
                let kakaoRoadUrl = "https://map.kakao.com/link/to/"
                let place = markerPlaceNames[i]
                let placeIndex = markerPlaceNames[i].indexOf('(')
                let realPlace = place.slice(0, placeIndex)
                let wido = String(markerPositions[i][0])
                let gyungdo = String(markerPositions[i][1])
                let findRoadUrl = kakaoRoadUrl + realPlace + ',' + wido + ',' + gyungdo
                let iwContent = `<div style="padding:20px;"><a href=${findRoadUrl} target="_blank">${markerPlaceNames[i]}</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

                // 인포윈도우를 생성합니다
                let infowindow = new kakao.maps.InfoWindow({
                    content : iwContent,
                    removable : iwRemoveable
                });

                let marker = new kakao.maps.Marker({ map: kakaoMap, position, title: markerPlaceNames[i], clickable: true })
                kakao.maps.event.addListener(marker, 'click', function() {
                  infowindow.open(kakaoMap, marker);  
                });
                return marker
              }
            );
        });
    
        if (positions.length > 0) {
            const bounds = positions.reduce(
                (bounds, latlng) => bounds.extend(latlng),
                new kakao.maps.LatLngBounds()
            );
            kakaoMap.setBounds(bounds);
        }
    }, [kakaoMap, markerPositions, markerPlaceNames]);

    return <div id="mapContainer" ref={container} />
}

export default KakaoMap;
