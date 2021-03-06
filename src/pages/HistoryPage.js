import React, { useState } from 'react';
import BackPage from '../components/BackPage';
import HistoryList from '../components/HistoryList';

const HistoryPage = () => {
  const [status, setStatus] = useState('');

  const handleStatus = (e) => {
    setStatus(e.target.value);
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
            <HistoryList status={status} />
          </div>
        </div>
      </BackPage>
    </div>
  );
};
export default HistoryPage;
