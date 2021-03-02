import React from 'react';
import Filter from '../assets/filter.svg';
function FilterButtons() {
  return (
    <div className="flex flex-row w-screen h-auto justify-evenly mt-3 px-1">
      <img src={Filter} alt="filterbtn" />
      <button className="bg-pink w-auto text-center text-xs text-gray-500 px-2 py-1 font-Roboto rounded-md ">
        Request Type
      </button>
      <button className="bg-pink w-auto text-center text-xs text-gray-500 px-2 py-1 font-Roboto rounded-md ">
        Blood Type
      </button>
      <button className="bg-pink w-auto text-center text-xs text-gray-500 px-3 py-1 font-Roboto rounded-md ">
        Location
      </button>
      <button className="bg-pink w-auto text-center text-xs text-gray-500 px-4 py-1 font-Roboto rounded-md ">
        Reset All
      </button>
    </div>
  );
}

export default FilterButtons;
