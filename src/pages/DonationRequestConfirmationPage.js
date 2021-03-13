import React from 'react';
import DonationRequest from '../components/Donationrequestconfirmation';
import BackPage from '../components/BackPage';
import { withNamespaces } from 'react-i18next';
const DonationRequestPage = ({ t }) => {
  return (
    <div>
      <BackPage title={t('donationform.donation_form')}>
        <div>
          <DonationRequest />
        </div>

        <div className=" h-48 m-4 rounded-md">map here</div>
      </BackPage>
    </div>
  );
};
export default withNamespaces()(DonationRequestPage);
