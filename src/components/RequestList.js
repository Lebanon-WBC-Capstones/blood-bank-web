import React, { useCallback, useEffect, useState, useMemo } from 'react';
import RequestItem from './RequestItem.js';
import firebase from 'firebase';
import { getDefaultNormalizer } from '@testing-library/dom';
const RequestList = ({ type, donReq }) => {
  /*const request = useMemo(
    () => [
      {
        user: {
          username: 'Jolie Hobloss',
          avatar:
            'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
        },
        data: {
          blood_type: 'AB+',
          request_type: 'Blood Cells',
          location: 'Haykal',
          amount: '2',
          phone: '70/4673728',
        },
      },
      {
        user: {
          username: 'Jana Zrayka',
          avatar:
            'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
        },
        data: {
          blood_type: 'O+',
          request_type: 'Red Cells',
          location: 'Nini',
          amount: '3',
          phone: '70/4673728',
        },
      },

      {
        user: {
          username: 'Layla Hammoud',
          avatar:
            'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
        },
        data: {
          blood_type: 'A+',
          request_type: 'Plasma',
          location: 'Mazloum',
          amount: '2',
          phone: '70/4673728',
        },
      },
      {
        user: {
          username: 'Mohamad Tassieh',
          avatar:
            'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
        },
        data: {
          blood_type: 'O-',
          request_type: 'Blood Cells',
          location: 'Haykal',
          amount: '2',
          phone: '70/4673728',
        },
      },
      {
        user: {
          username: 'Jolie Hobloss',
          avatar:
            'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
        },
        data: {
          blood_type: 'AB+',
          request_type: 'Platelets',
          location: 'Haykal',
          amount: '2',
          phone: '70/4673728',
        },
      },

      {
        user: {
          username: 'Nabigha Mogharbel',
          avatar:
            'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
        },
        data: {
          blood_type: 'B+',
          request_type: 'Blood Cells',
          location: 'Monla',
          amount: '4',
          phone: '70/4673728',
        },
      },
      {
        user: {
          username: 'AbdulRahman',
          avatar:
            'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
        },
        data: {
          blood_type: 'A-',
          request_type: 'Platelets',
          location: 'Monla',
          amount: '2',
          phone: '70/4673728',
        },
      },
    ],
    []
  );*/
  const [requestFilter, setRequestFilter] = useState([]);

  const filteredHandler = useCallback(() => {
    switch (type) {
      case 'Blood Cells':
        setRequestFilter(
          donReq.filter((r) => r.data.donation_type === 'Blood Cells')
        );
        break;
      case 'Red Cells':
        setRequestFilter(
          donReq.filter((r) => r.data.donation_type === 'Red Cells')
        );
        break;
      case 'Plasma':
        setRequestFilter(
          donReq.filter((r) => r.data.donation_type === 'Plasma')
        );
        break;
      case 'Platelets':
        setRequestFilter(
          donReq.filter((r) => r.data.donation_type === 'Platelets')
        );
        break;
      case 'AB+':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'AB+'));
        break;
      case 'AB-':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'AB-'));
        break;
      case 'A+':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'A+'));
        break;
      case 'A-':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'A-'));
        break;
      case 'B+':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'B+'));
        break;
      case 'B-':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'B-'));
        break;
      case 'O+':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'O+'));
        break;
      case 'O-':
        setRequestFilter(donReq.filter((r) => r.data.bloodType === 'O-'));
        break;
      case 'Reset':
        setRequestFilter([]);
        break;
      default:
        setRequestFilter(donReq);
        break;
    }
  }, [donReq, type]);

  useEffect(() => {
    filteredHandler();
  }, [filteredHandler]);
  return (
    <div>
      <div className="mt-12">
        {requestFilter.map((e, i) => (
          <RequestItem data={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default RequestList;
