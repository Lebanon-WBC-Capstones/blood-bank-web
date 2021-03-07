import React from 'react';
import BloodDrops from '../assets/drops.svg';
function BloodDrop(props) {
  return (
    <div>
      <div className="flex flex-row justify-evenly mt-12">
        <label className="font-Roboto text-lg text-gray-500 pr-20 ml-6 sm:text-2xl sm:pr-40">
          Blood Type:
        </label>
        <img
          src={BloodDrops}
          alt="BloodDrop"
          className="animate-pulse w-1/6 mr-6"
        />
        <div className="absolute text-lg text-white mt-5 ml-48 font-bold font-Roboto sm:ml-80 sm:text-3xl sm:mt-8">
          {props.bloodtype}
        </div>
      </div>
    </div>
  );
}

export default BloodDrop;
