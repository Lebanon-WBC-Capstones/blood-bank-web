import React from 'react';
import BackPage from '../components/BackPage.js';
import DonationConfirmed from '../components/DonationConfirmed.js';

function DonationConfirmPage() {
  return (
    <div>
      <BackPage title="Donation Confirmed">
        <DonationConfirmed />
      </BackPage>
    </div>
  );
}

export default DonationConfirmPage;
