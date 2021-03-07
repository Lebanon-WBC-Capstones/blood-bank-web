import React from 'react';
import BackPage from '../components/BackPage.js';
import DonationAppointment from '../components/DonationAppointment.js';

function DonateAppointment() {
  return (
    <div>
      <BackPage title="Donate">
        <DonationAppointment />
      </BackPage>
    </div>
  );
}

export default DonateAppointment;
