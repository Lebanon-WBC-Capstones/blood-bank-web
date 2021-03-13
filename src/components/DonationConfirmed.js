import React from 'react';
import Logo from '../assets/Logo.svg';
import { withNamespaces } from 'react-i18next';
function DonationConfirmed({ t }) {
  return (
    <div className="flex flex-col align-center ">
      <div className="text-gray-600 font-normal px-4 text-2xl align-center mt-10 sm:p-3 sm:text-4xl">
        {t('donationConfirm.donation_confirmed')}
        <br />{' '}
        {t(
          'donationConfirm.thank_you_for_your_donation_please_check_your_email_for_more_information'
        )}
      </div>
      <div className="flex flex-row mb-7 items-center ml-16 mt-16 sm:mr-5 ">
        <img
          src={Logo}
          alt="Logo"
          className="animate-pulse sm:flex sm:w-full sm:p-6"
        />
      </div>
    </div>
  );
}

export default withNamespaces()(DonationConfirmed);
