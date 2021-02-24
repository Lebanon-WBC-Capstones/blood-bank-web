import React from 'react';
import DonationRequest from './Donationrequestconfirmation';
import BackPage from './BackPage';

const DonationRequestPage = () => {
  return (
    <div>
      <BackPage title="Donation From">
        <div>
          <DonationRequest />
        </div>

        <div className=" h-48 m-4 rounded-md">map here</div>
      </BackPage>
    </div>
  );
};
export default DonationRequestPage;
