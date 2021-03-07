import React from 'react';
import BloodCells from '../assets/bloodcells.svg';
import Platelets from '../assets/plasma.svg';
import BloodTube from '../assets/bloodtube_1.svg';
import BloodContainer from '../assets/bloodContainer.svg';
import { Link } from 'react-router-dom';

import ListView from './ListView.js';

function ListItem() {
  const RequestList = [
    {
      donation_type: 'Plasma Request',
      icon: BloodTube,
      location: 'Nini Hospital',
      date: '2021-02-10T15:47:40.314Z',
    },
    {
      donation_type: 'Red Cells Request',
      icon: BloodCells,
      location: 'Haykal Hospital',
      date: '2021-02-28T15:47:40.314Z',
    },

    {
      donation_type: 'Platelets Request',
      icon: Platelets,
      location: 'Mazloum Hospital',
      date: '2021-02-20T15:47:40.314Z',
    },
    {
      donation_type: 'Blood Request',
      icon: BloodContainer,
      location: 'Monla Hospital',
      date: '2021-02-26T15:47:40.314Z',
    },
  ];
  return (
    <div>
      {RequestList.length !== 0
        ? RequestList.map((e, i) => (
            <Link to={`/donate`}>
              <ListView
                photo={e.icon}
                item_data={e.donation_type}
                location={e.location}
                date={e.date}
                key={i}
              />
            </Link>
          ))
        : ''}
    </div>
  );
}

export default ListItem;
