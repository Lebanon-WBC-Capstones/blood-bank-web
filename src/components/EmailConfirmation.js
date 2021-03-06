import React from 'react';
import signinlogo from '../assets/signlogo.svg';
import getstarted from '../assets/getstarted.svg';
import { Link } from 'react-router-dom';
const EmailConfirmation = () => {
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
          <div className="text-5xl">Thank you Layla!</div>
        </div>
        <div className="mt-16">
          <p className="text-xl">
            Please check your email to verify the account
          </p>
        </div>
      </div>
      <Link to={`/dashboard`}>
        <div className="mt-20 ml-44 flex flex-row">
          <div>Get started</div>
          <div className="mt-1 ml-2">
            {' '}
            <img src={getstarted} alt="getstarted" className="w-5" />
          </div>
        </div>
      </Link>
    </div>
  );
};
export default EmailConfirmation;
