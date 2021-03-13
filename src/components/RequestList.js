import React, { useCallback, useEffect, useState, useMemo } from 'react';
import RequestItem from './RequestItem.js';
import Jolie from '../assets/jolie_H.png';
import Jana from '../assets/jana_Z.png';
import Layla from '../assets/layla_H.png';
import Mohamad from '../assets/mohamad_T.png';
import Nabigha from '../assets/nabigha_M.png';
import Abdulrahman from '../assets/abdulrahman.png';
const RequestList = ({ type }) => {
  const request = useMemo(
    () => [
      {
        user: {
          username: 'Jolie Hobloss',
          avatar: Jolie,
        },
        data: {
          blood_type: 'B+',
          request_type: 'Blood Cells',
          location: 'Haykal Hospital',
          amount: '2',
        },
      },
      {
        user: {
          username: 'Jana Zrayka',
          avatar: Jana,
        },
        data: {
          blood_type: 'O+',
          request_type: 'Red Cells',
          location: 'Nini Hospital',
          amount: '3',
        },
      },

      {
        user: {
          username: 'Layla Hammoud',
          avatar: Layla,
        },
        data: {
          blood_type: 'A+',
          request_type: 'Plasma',
          location: 'Nini Hospital',
          amount: '2',
        },
      },
      {
        user: {
          username: 'Mohamad Tassieh',
          avatar: Mohamad,
        },
        data: {
          blood_type: 'O-',
          request_type: 'Blood Cells',
          location: 'Monla Hospital',
          amount: '2',
        },
      },
      {
        user: {
          username: 'Nabigh Mogharbel',
          avatar: Nabigha,
        },
        data: {
          blood_type: 'AB+',
          request_type: 'Platelets',
          location: 'Hanan Hospital',
          amount: '2',
        },
      },

      {
        user: {
          username: 'Abdulrahman Ghalayini',
          avatar: Abdulrahman,
        },
        data: {
          blood_type: 'B+',
          request_type: 'Blood Cells',
          location: 'Monla',
          amount: '4',
        },
      },
    ],
    []
  );
  const [requestFilter, setRequestFilter] = useState([]);

  const filteredHandler = useCallback(() => {
    switch (type) {
      case 'Blood Cells':
        setRequestFilter(
          request.filter((r) => r.data.request_type === 'Blood Cells')
        );
        break;
      case 'Red Cells':
        setRequestFilter(
          request.filter((r) => r.data.request_type === 'Red Cells')
        );
        break;
      case 'Plasma':
        setRequestFilter(
          request.filter((r) => r.data.request_type === 'Plasma')
        );
        break;
      case 'Platelets':
        setRequestFilter(
          request.filter((r) => r.data.request_type === 'Platelets')
        );
        break;
      case 'AB+':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'AB+'));
        break;
      case 'AB-':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'AB-'));
        break;
      case 'A+':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'A+'));
        break;
      case 'A-':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'A-'));
        break;
      case 'B+':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'B+'));
        break;
      case 'B-':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'B-'));
        break;
      case 'O+':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'O+'));
        break;
      case 'O-':
        setRequestFilter(request.filter((r) => r.data.blood_type === 'O-'));
        break;
      case 'Reset':
        setRequestFilter([]);
        break;
      default:
        setRequestFilter(request);
        break;
    }
  }, [request, type]);

  useEffect(() => {
    filteredHandler();
  }, [filteredHandler]);
  return (
    <div>
      <div className="mt-12">
        {requestFilter.map((e, i) => (
          <RequestItem item_user={e.user} item_data={e.data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default RequestList;
