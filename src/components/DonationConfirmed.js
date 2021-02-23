import React from 'react';
import Logo from '../assets/Logo.svg';

function DonationConfirmed() {
  return (
    <div className="flex flex-col align-center min-h-screen bg-pink">
      <div className="text-gray-600 font-normal text-2xl mt-20 align-center p-10 sm:text-4xl">
        Thank you for your donation.
        <br /> Please check your email for more information
      </div>
      <div className="flex flex-row sitems-center ml-16 mt-16 ">
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
