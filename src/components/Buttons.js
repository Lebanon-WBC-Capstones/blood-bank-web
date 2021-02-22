import React from 'react';
import Urgent from '../assets/Urgent.svg';
import Volunteer from '../assets/volunteer_1.svg';

function Buttons() {
  const handleClick = () => {};
  return (
    <div className="container  max-w-screen-sm ">
      <div className=" flex flex-row justify-evenly rounded-lg border-2 h-12 ml-2 mr-2 mt-3 bg-gray-100 ">
        <button
          className="flex flex-row items-center justify-evenly border-r-4 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-tl-lg rounded-bl-lg bg-pink w-full text-gray-500 font-medium font-Roboto"
          onClick={handleClick}
        >
          <img src={Urgent} alt="urgent" />
          Urgent
        </button>
        <button className="flex flex-row justify-evenly items-center focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-tr-lg rounded-br-lg bg-white w-full text-gray-500 font-medium font-Roboto  ">
          <img src={Volunteer} alt="volunteer" onClick={handleClick} />
          Volunteer
        </button>
      </div>
    </div>
  );
}

export default Buttons;
