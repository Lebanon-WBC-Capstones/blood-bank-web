import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';

const BaseMap = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmFiaWdhLW1vZ2hhcmJlbCIsImEiOiJja2xnYTlyODExaTg2MndtMWg3eWphbDJ3In0.gLuNdVH-s2YVy_-_fWa4MA';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [35.833341, 34.435179],
      zoom: 12,
    });
  }, []);

  return (
    <div
      id="mapContainer"
      style={{
        display: 'block',
        width: '90vw',
        height: '80vw',
        marginLeft: '5vw',
        marginTop: '20vw',
      }}
    ></div>
  );
};

export default BaseMap;
