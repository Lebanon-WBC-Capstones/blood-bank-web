import React from 'react';
import DonationRequest from './Donationrequestconfirmation';
import BackPage from './BackPage';

const DonationRequestPage = () => {
  return (
    <div>
      <BackPage title="Donation From">
        <DonationRequest />
      </BackPage>
    </div>
  );
};
export default DonationRequestPage;
