import React from 'react';
import FeedItem from './FeedItem.js';
import Jolie from '../assets/jolie_H.png';
import Jana from '../assets/jana_Z.png';
import Layla from '../assets/layla_H.png';
import Mohamad from '../assets/mohamad_T.png';
import Nabigha from '../assets/nabigha_M.png';
import Abdulrahman from '../assets/abdulrahman.png';

const FeedList = () => {
  const feed = [
    {
      fulfilled: true,
      user: {
        username: 'Layla Hammoud',
        avatar: Layla,
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '2 ',
        donors: ['Ahmed', 'Fahed', 'jana', 'nabi8a'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Jana Zrayka',
        avatar: Jana,
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Sick',
        amount: '6 ',
        donors: ['Salam', 'Nada', 'jana', 'nabi8a'],
      },
    },
    {
      fulfilled: true,
      user: {
        username: 'Jolie Hobloss',
        avatar: Jolie,
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Patient',
        amount: '3',
        donors: ['Nabigha', 'Jana', 'jana', 'Mohamad'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Nabigh Mogharbel',
        avatar: Nabigha,
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Jump Accident',
        amount: '9 ',
        donors: ['Rima', 'Layla', 'Fawzi', 'nabi8a'],
      },
    },
    {
      fulfilled: true,
      user: {
        username: 'Mohamad Tassieh',
        avatar: Mohamad,
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Car accident',
        amount: '1',
        donors: ['Layla', 'Jana', 'jana', 'nabi8a'],
      },
    },

    {
      fulfilled: true,
      user: {
        username: 'Abdulrahman Ghalayini',
        avatar: Abdulrahman,
      },
      data: {
        operation: 'Request',
        date: '2021-02-18T15:47:40.314Z',
        reason: 'Corona',
        amount: '5',
        donors: ['Ahmed', 'Layla', 'jana', 'nabi8a'],
      },
    },
  ];

  return (
    <div className="px-3 py-1">
      {feed.length !== 0
        ? feed.map((f, i) => (
            <FeedItem item_user={f.user} item_data={f.data} key={i} />
          ))
        : ''}
    </div>
  );
};

export default FeedList;
