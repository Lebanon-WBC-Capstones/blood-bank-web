import React, { useState } from 'react';
import BackPage from '../components/BackPage';
import RequestList from '../components/RequestList';
import FilterButtons from '../components/FilterButtons';
function NotificationPage({ type }) {
  const [valueState, setValueState] = useState('');

  const handleValue = (val) => {
    setValueState(val);
  };

  return (
    <div>
      <BackPage title="Request">
        <div className="bg-white h-12 fixed top-32 ">
          <FilterButtons handleValue={handleValue} />{' '}
        </div>
        <RequestList type={valueState} />
      </BackPage>
    </div>
  );
}

export default NotificationPage;
