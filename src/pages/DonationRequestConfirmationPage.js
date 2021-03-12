import React from 'react';
import { useEffect } from 'react';
import DonationRequest from '../components/Donationrequestconfirmation';
import BackPage from '../components/BackPage';
import { withNamespaces } from 'react-i18next';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
const DonationRequestPage = ({ t }) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmFiaWdhLW1vZ2hhcmJlbCIsImEiOiJja2xnYTlyODExaTg2MndtMWg3eWphbDJ3In0.gLuNdVH-s2YVy_-_fWa4MA';
  const coordinate = [35.8299404017442, 34.4410152322184];
  useEffect(() => {
    new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinate,
      zoom: 15,
    });
  }, []);
  return (
    <div>
      <BackPage title={t('donationform.donation_form')}>
        <div>
          <DonationRequest />
        </div>

        <div className=" h-48 m-4 rounded-md">
          <div
            id="mapContainer"
            style={{
              display: 'block',
              width: '90vw',
              height: '100vw',
              marginLeft: '3vw',
              marginTop: '7vw',
            }}
          ></div>
        </div>
      </BackPage>
    </div>
  );
};
export default withNamespaces()(DonationRequestPage);
