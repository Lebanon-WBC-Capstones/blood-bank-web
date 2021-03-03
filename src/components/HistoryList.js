import React from 'react';
import HistoryItem from './HistoryItem.js';
const HistoryList = () => {
  const history = [
    {
      operation: 'Donation',
      type: 'Plazma donation',
      amount: '6 pints',
      location: 'Nini Hospital',
      date: '2021-02-18T15:47:40.314Z',
    },
  ];
  return (
    <div>
      {history.map((h) => (
        <HistoryItem item={h} />
      ))}
    </div>
  );
};
export default HistoryList;
