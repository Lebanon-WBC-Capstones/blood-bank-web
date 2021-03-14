import React, { useEffect, useCallback, useState, useContext } from 'react';
import HistoryItem from './HistoryItems.js';
import circleblue from '../assets/circleblue.svg';
import circlered from '../assets/circlered.svg';
import { firestore } from '../api/firebase.js';
import { Context } from '../Context';

const HistoryList = ({ status }) => {
  const [historyFilter, setHistoryFilter] = useState([]);
  const [state] = useContext(Context);

  const [request, setRequest] = useState([]);
  const [donation, setDonation] = useState([]);
  const RequestList = [];
  const DonationList = [];

  const getRequest = async () => {
    return firestore
      .collection('Request')
      .where('userId', '==', state.setUser.uid)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) =>
          RequestList.push({ ...doc.data(), image: circleblue })
        );
        setRequest(RequestList);
      });
  };

  const getDonation = async () => {
    return firestore
      .collection('Donation')
      .where('userId', '==', state.setUser.uid)
      .onSnapshot((snapshot) => {
        snapshot.forEach((doc) =>
          DonationList.push({ ...doc.data(), image: circlered })
        );
        setDonation(DonationList);
      });
  };

  useEffect(() => {
    getDonation();
    getRequest();
  }, []);

  const filteredHandler = useCallback(() => {
    let history = [...request, ...donation];
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
  }, [status, request, donation]);

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
