import React from 'react';
import Logo from '../assets/Logo.svg';

function DonationConfirmed() {
  return (
    <div className="flex flex-col align-center ">
      <div className="text-gray-600 font-normal px-4 text-2xl align-center mt-10 sm:p-3 sm:text-4xl">
        Thank you for your donation.
        <br /> Please check your email for more information
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

export default DonationConfirmed;
