import React from 'react';
import BackPage from '../components/BackPage.js';
import DonationRejected from '../components/DonationRejected.js';

function DonationRejectedPage() {
  return (
    <div>
      <BackPage title="Request Sent">
        <DonationRejected />
      </BackPage>
    </div>
  );
}

export default DonationRejectedPage;
