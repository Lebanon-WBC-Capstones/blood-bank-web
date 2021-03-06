import React, { useEffect, useState } from 'react';
import HistoryItem from './HistoryItem.js';
import circleblue from '../sources/circleblue.svg';
import circlered from '../sources/circlered.svg';

const HistoryList = ({ status }) => {
  const [historyFilter, setHistoryFilter] = useState([]);

  useEffect(() => {
    filteredHandler();
  }, [status]);

  const filteredHandler = () => {
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
  };

  const history = [
    {
      operation: 'Donation',
      type: 'blood cells',
      amount: '4 pints',
      location: 'Mazloum',
      date: '2021-03-01T15:47:40.314Z',
      image: circleblue,
    },
    {
      operation: 'Request',
      type: 'blood ',
      amount: '10 pints',
      location: 'Monla ',
      date: '2021-02-18T15:47:40.314Z',
      image: circlered,
    },
    {
      operation: 'Donation',
      type: 'Plazma donation',
      amount: '6 pints',
      location: 'Nini Hospital',
      date: '2021-02-18T15:47:40.314Z',
      image: circleblue,
    },
    {
      operation: 'Donation',
      type: 'Plazma donation',
      amount: '6 pints',
      location: 'Nini Hospital',
      date: '2021-02-18T15:47:40.314Z',
      image: circleblue,
    },
    {
      operation: 'Request',
      type: 'Plazma donation',
      amount: '6 pints',
      location: 'Nini Hospital',
      date: '2021-02-18T15:47:40.314Z',
      image: circlered,
    },
    {
      operation: 'Donation',
      type: 'Plazma donation',
      amount: '6 pints',
      location: 'Nini Hospital',
      date: '2021-02-18T15:47:40.314Z',
      image: circleblue,
    },
    {
      operation: 'Request',
      type: 'Plazma donation',
      amount: '6 pints',
      location: 'Nini Hospital',
      date: '2021-02-18T15:47:40.314Z',
      image: circlered,
    },
  ];

  return (
    <div>
      {historyFilter.map((h, i) => (
        <HistoryItem item={h} key={i} />
      ))}
    </div>
  );
};
export default HistoryList;
