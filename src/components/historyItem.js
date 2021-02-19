import React from 'react';
import bloodIcon from '../sources/bloodIcon.svg';
import circle from '../sources/thecircle.svg';
import location from '../sources/location.svg';
const HistoryItem = () => {
  return (
    <div className="min-h-screen bg-gray-500 w-full">
      <div className="container mx-auto px-5 pt-10">
        <div className="bg-white w-full h-20 flex">
          <div>2 days ago | 10:30 AM</div>
          <div className="" style={{ transform: 'rotate(90deg)' }}>
            donation
          </div>
          <div>
            <img src={circle} alt="circle" />
          </div>
          <div>
            <img src={bloodIcon} alt="blood icon" />
          </div>
          <div>
            <img src={location} alt="location item" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryItem;
