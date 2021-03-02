import React, { useState, useEffect } from 'react';
import BackPage from '../components/BackPage';
import HistoryList from '../components/HistoryList';
import circleblue from '../sources/circleblue.svg';
import circlered from '../sources/circlered.svg';

const HistoryPage = () => {
  const [status, setStatus] = useState('');
  const [historyFilter, setHistoryFilter] = useState([]);

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

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

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
  return (
    <div>
      <BackPage title="History">
        <div className="flex flex-col">
          <div>
            <select
              name="operation"
              className="float-right mr-5 border-2 h-10 w-24 rounded-lg pl-2 text-xs text-gray-500 "
              onChange={handleStatus}
            >
              <option value="all">All</option>
              <option value="Donation">Donation</option>
              <option value="Request">Request</option>
            </select>
          </div>
          <div>
            <HistoryList historyFilter={historyFilter} />
          </div>
        </div>
      </BackPage>
    </div>
  );
};
export default HistoryPage;
