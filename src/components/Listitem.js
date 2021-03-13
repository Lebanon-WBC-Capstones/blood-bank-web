import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { firestore } from '../api/firebase.js';

import ListView from './ListView.js';

function ListItem() {
  const [state, setState] = useState([]);
  const RequestList = [];
  const getCollection = async () => {
    return firestore.collection('Request').onSnapshot((snapshot) => {
      snapshot.forEach((doc) => RequestList.push({ ...doc.data() }));
      setState(RequestList);
    });
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <div>
      {state.map((e, i) => (
        <Link
          to={`/donate/${e.name}/${e.phone}/${e.location}/${e.pints}/${e.donation_type}`}
        >
          <ListView
            //photo={e.icon}
            item_data={e.donation_type}
            location={e.location}
            date={e.date}
            key={i}
          />
        </Link>
      ))}
    </div>
  );
}

export default ListItem;
