import React from 'react';
import Filter from '../assets/filter.svg';
import { withNamespaces } from 'react-i18next';

function FilterButtons({ handleValue, t }) {
  const handleType = (e) => {
    handleValue(e.target.value);
  };
  const handleReset = () => {
    handleValue('Reset');
  };
  return (
    <div className="flex flex-row w-screen h-auto justify-around mt-3 px-1">
      <img src={Filter} alt="filterbtn" />

      <select
        name="Request Type"
        className="bg-pink w-auto text-center text-xs text-gray-500 px-3 py-1 font-Roboto rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 "
        onChange={handleType}
      >
        <option value="Plasma">Plasma</option>
        <option value="Red Cells">Red Cells</option>
        <option value="Blood Cells">Blood Cells</option>
        <option value="Platelets">Platelets</option>
      </select>
      <select
        name="Blood Type"
        className="bg-pink w-auto text-center text-xs text-gray-500 px-3 py-1 font-Roboto rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50  "
        onChange={handleType}
      >
        <optgroup label="AB">
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </optgroup>
        <optgroup label="A">
          <option value="A+">A+</option>
          <option value="A-">A-</option>
        </optgroup>
        <optgroup label="O">
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </optgroup>
        <optgroup label="B">
          <option value="B+">B+</option>
          <option value="B-">B-</option>
        </optgroup>
      </select>
      <button
        className="bg-pink w-auto text-center text-xs text-gray-500 px-4 py-1 font-Roboto rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 "
        onClick={handleReset}
      >
        {t('btn.Reset All')}
      </button>
    </div>
  );
}

export default withNamespaces()(FilterButtons);
