import React from 'react';
import bloodIcon from '../sources/bloodIcon.svg';
import circle from '../sources/thecircle.svg';
import location from '../sources/location.svg';
import moment from 'moment';

const HistoryItem = (props) => {
  console.log(props);

  const checkDate = (myDate) => {
    if (moment().diff(myDate, 'days') > 7) {
      return moment(myDate).format('MMM DD, YYYY');
    } else {
      return moment(myDate).fromNow();
    }
  };

  return (
    <div className="border-b-2 border-gray-100">
      <div class=" flex flex-col ">
        <div className="-ml-44 text-xs text-gray-400 mt-1">
          {checkDate(props.item.date)}
        </div>
        <div class="">
          <div className="flex flex-row justify-between   ">
            <div className="flex flex-row">
              <div className="ml-5 transform -rotate-90 text-xs text-gray-400 mb-1">
                {props.item.operation}
              </div>
              <img className="-mt-8 -mb-3 -ml-12" src={circle} alt="circle" />
              <img
                className="ml-1 mt-2 mb-5"
                src={bloodIcon}
                alt="blood icon"
              />
              <div className="flex flex-col ">
                <p className="mt-2 ml-2 text-gray-500">{item.type}</p>
                <div className="flex flex-row ">
                  <img className="ml-2" src={location} alt="locatim icon" />{' '}
                  <span className="ml-1 mb-1 mt-1 text-xs text-gray-500">
                    {props.item.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-11 h-8 rounded-lg bg-gray-300 text-xs text-center pt-1 mt-3 mr-3 ">
              {props.item.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryItem;
