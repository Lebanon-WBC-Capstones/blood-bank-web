import React, { useEffect, useCallback, useState } from 'react';
import HistoryItem from './HistoryItems.js';
import circleblue from '../assets/circleblue.svg';
import circlered from '../assets/circlered.svg';

const history = [
  {
    operation: 'Donation',
    type: 'Red Cells',
    amount: '4 pints',
    location: 'Mazloum',
    date: '2021-03-01T15:47:40.314Z',
    image: circleblue,
  },
  {
    operation: 'Request',
    type: 'blood',
    amount: '10 pints',
    location: 'Monla ',
    date: '2021-02-18T15:47:40.314Z',
    image: circlered,
  },
  {
    operation: 'Donation',
    type: 'Platelets',
    amount: '6 pints',
    location: 'Nini',
    date: '2021-02-18T15:47:40.314Z',
    image: circleblue,
  },
  {
    operation: 'Donation',
    type: 'Plazma donation',
    amount: '6 pints',
    location: 'Nini',
    date: '2021-02-18T15:47:40.314Z',
    image: circleblue,
  },
  {
    operation: 'Request',
    type: 'Plazma donation',
    amount: '6 pints',
    location: 'Nini',
    date: '2021-02-18T15:47:40.314Z',
    image: circlered,
  },
  {
    operation: 'Donation',
    type: 'Plazma donation',
    amount: '6 pints',
    location: 'Nini',
    date: '2021-02-18T15:47:40.314Z',
    image: circleblue,
  },
  {
    operation: 'Request',
    type: 'Plazma donation',
    amount: '6 pints',
    location: 'Nini',
    date: '2021-02-18T15:47:40.314Z',
    image: circlered,
  },
];
const HistoryList = ({ status }) => {
  const [historyFilter, setHistoryFilter] = useState([]);

  const filteredHandler = useCallback(() => {
    switch (status) {
      case 'Donation':
        setHistoryFilter(history.filter((h) => h.operation === 'Donation'));
        break;
      case 'Request':
        setHistoryFilter(history.filter((h) => h.operation === 'Request'));
        break;
      default:
        setHistoryFilter(history);
        break;
    }
  }, [status]);
  useEffect(() => {
    filteredHandler();
  }, [filteredHandler]);

  return (
    <div>
      {historyFilter.map((h, i) => (
        <HistoryItem item={h} key={i} />
      ))}
    </div>
  );
};
export default HistoryList;
