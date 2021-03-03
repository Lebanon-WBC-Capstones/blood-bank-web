import * as React from 'react';
import RequestItem from './RequestItem.js';

const RequestList = () => {
  const request = [
    {
      user: {
        username: 'Jolie Hobloss',
        avatar:
          'https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png',
      },
      data: {
        blood_type: 'Ab+',
        request_type: 'Blood Cells',
        location: 'Haykal Hospital',
        amount: '2 pints',
        phone: '70/4673728',
      },
    },
  ];
  return (
    <div>
      {request.length !== 0
        ? request.map((i) => (
            <RequestItem item_user={i.user} item_data={i.data} />
          ))
        : ''}
    </div>
  );
};

export default RequestList;
