/*global kakao*/
import React, { useEffect, useState, useRef } from 'react';
const KakaoMap = (props) => {
    const { markerPositions } = props;
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
        setKakaoMap(map)
    }, [container])
    // /dsads

    useEffect(() => {
        if (kakaoMap === null) {
          return;
        }
        
        const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));
        let mapMarkers = []
        for (let i = 0; i < positions.length; i++) {
            const marker = new kakao.maps.Marker({
                position: positions[i]
            });
            marker.setMap(kakaoMap)
            mapMarkers.push(marker)
        }

        setMarkers(mapMarkers);
    
        if (positions.length > 0) {
          const bounds = positions.reduce(
            (bounds, latlng) => bounds.extend(latlng),
            new kakao.maps.LatLngBounds()
        );
    
          kakaoMap.setBounds(bounds);
        }
    }, [kakaoMap, markerPositions]);

    return <div id="map" ref={container} />
    
}

export default KakaoMap;