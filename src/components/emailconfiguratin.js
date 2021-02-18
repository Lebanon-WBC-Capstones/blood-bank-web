import React from 'react';
import signinlogo from '../assets/signinlogo.svg';
const Configuration = () => {
  return (
    <div className="text-gray-500 ">
      <div className="mt-12">
        <img
          src={signinlogo}
          alt="donation icon"
          className="block"
          style={{ margin: '0 auto' }}
        />
      </div>
      <div className="m-7 pt-10">
        <div className="text-5xl">Thank you Layla!</div>
      </div>
      <div className="mx-10 px-10 pt-10 mt-10">
        <p className="text-xl">Please check your email to verify the account</p>
      </div>
    </div>
  );
};
export default Configuration;
