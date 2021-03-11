import React from 'react';
import signinlogo from '../assets/signlogo.svg';
import getstarted from '../assets/getstarted.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
const EmailConfirmation = ({ t }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col ">
        <div>
          <img
            src={signinlogo}
            alt="donation icon"
            className="block"
            style={{ margin: '0 auto' }}
          />
        </div>
        <div className="mt-20">
          <div className="text-5xl">{t('signupconfirm.thank_you')}</div>
        </div>
        <div className="mt-16">
          <p className="text-xl">
            {t('signupconfirm.please_check_your_email_to_verify_the_account')}
          </p>
        </div>
      </div>
      <Link to={`/dashboard`}>
        <div className="mt-20 ml-44 flex flex-row">
          <div>{t('signupconfirm.get_started')}</div>
          <div className="mt-1 ml-2">
            {' '}
            <img src={getstarted} alt="getstarted" className="w-5" />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default withNamespaces()(EmailConfirmation);
