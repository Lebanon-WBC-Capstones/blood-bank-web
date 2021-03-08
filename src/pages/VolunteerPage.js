import React from 'react';
import Map from '../components/map-view-map';
import BackPage from '../components/BackPage.js';
export default function VolunteerPage() {
  return (
    <BackPage title="Volunteer">
      <div className="mt-6 px-2">
        <Map />
      </div>
    </BackPage>
  );
}
