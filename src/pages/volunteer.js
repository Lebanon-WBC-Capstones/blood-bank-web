import React from 'react';
import Map from '../components/map-view-map';
import BackPage from '../components/BackPage.js';
export default function VolunteerPage() {
  return (
    <BackPage>
      <div className="mt-6">
        <Map />
      </div>
    </BackPage>
  );
}
