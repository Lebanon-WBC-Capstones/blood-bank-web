import React from 'react';
import DonationRequest from '../components/Donationrequestconfirmation';
import BackPage from '../components/BackPage';
import Map from '../components/map-view-map';
import { withNamespaces } from 'react-i18next';
const DonationRequestPage = ({ t }) => {
  return (
    <div>
      <BackPage title={t('donationform.donation_form')}>
        <div>
          <DonationRequest />
        </div>

        <div className=" h-48 ml-2 rounded-md">
          <Map />
        </div>
      </BackPage>
    </div>
  );
};
export default withNamespaces()(DonationRequestPage);
