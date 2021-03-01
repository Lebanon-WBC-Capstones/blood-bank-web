import React from 'react';
import HistoryItem from './HistoryItem.js';
const HistoryList = ({ historyFilter }) => {
  return (
    <div>
      {historyFilter.map((h) => (
        <div>
          <HistoryItem item={h} />
        </div>
      ))}
    </div>
  );
};
export default HistoryList;
