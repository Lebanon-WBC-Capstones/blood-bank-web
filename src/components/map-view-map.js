import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';
const BaseMap = () => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmFiaWdhLW1vZ2hhcmJlbCIsImEiOiJja2xnYTlyODExaTg2MndtMWg3eWphbDJ3In0.gLuNdVH-s2YVy_-_fWa4MA';

  useEffect(() => {
    new mapboxgl.Map({
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
        height: '100vw',
        marginLeft: '3vw',
        marginTop: '7vw',
      }}
      className="rounded-xl border-4 border-gray-200 "
    ></div>
  );
};

export default BaseMap;
