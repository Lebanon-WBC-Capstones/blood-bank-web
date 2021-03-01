import React from 'react';
import Filter from '../assets/filter.svg';
function FilterButtons() {
  return (
    <div className="flex flex-row justify-evenly">
      <img src={Filter} alt="filterbtn" />
      <button className="bg-pink w-auto text-center text-tiny text-gray-500 px-1 py-1 font-Roboto rounded-md ">
        Request Type
      </button>
      <button className="bg-pink w-auto text-center text-tiny text-gray-500 px-2 py-1 font-Roboto rounded-md ">
        Blood Type
      </button>
      <button className="bg-pink w-auto text-center text-tiny text-gray-500 px-3 py-1 font-Roboto rounded-md ">
        Location
      </button>
      <button className="bg-pink w-auto text-center text-tiny text-gray-500 px-2 py-1 font-Roboto rounded-md ">
        Reset All
      </button>
    </div>
  );
}

export default FilterButtons;
