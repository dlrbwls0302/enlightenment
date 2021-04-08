/*global kakao*/
import React, { useEffect, useState, useRef } from 'react';
const KakaoMap = (props) => {
    const { markerPositions } = props;
    const [kakaoMap, setKakaoMap] = useState(null);
    const [, setMarkers] = useState([]);
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
    
        setMarkers(markers => {
          // clear prev markers
          markers.forEach(marker => marker.setMap(null));
    
          // assign new markers
          return positions.map(
            position => new kakao.maps.Marker({ map: kakaoMap, position })
          );
        });
    
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