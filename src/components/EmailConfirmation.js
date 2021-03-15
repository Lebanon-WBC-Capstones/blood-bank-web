import React, { useContext } from 'react';
import signinlogo from '../assets/signlogo.svg';
import getstarted from '../assets/getstarted.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Context } from '../Context';

const EmailConfirmation = ({ t }) => {
  const [state] = useContext(Context);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col ">
        <div>
          <img
            src={signinlogo}
            alt="donation icon"
            className="block w-36 h-36"
            style={{ margin: '0 auto' }}
          />
        </div>
        <div className="mt-20">
          <div className="text-5xl text-grey font-roboto">
            {t('signupconfirm.thank_you')}
          </div>
        </div>
        <div className="mt-16">
          <p className="text-xl text-grey font-roboto">
            {t('signupconfirm.please_check_your_email_to_verify_the_account')}
          </p>
        </div>
      </div>
      <Link to={`/dashboard/${state.setUser.email}/Tripoli/""`}>
        <div className="mt-20 ml-44 flex flex-row">
          <div className="mt-1 ml-24">
            {' '}
            <img
              src={getstarted}
              alt="getstarted"
              className="w-6 h-5 animate-bounce"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default withNamespaces()(EmailConfirmation);
