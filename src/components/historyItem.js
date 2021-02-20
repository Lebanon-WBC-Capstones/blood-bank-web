import React from 'react';
import bloodIcon from '../sources/bloodIcon.svg';
import circle from '../sources/thecircle.svg';
import location from '../sources/location.svg';

const HistoryItem = () => {
  const formatDate = (string) => {
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  const history = [
    {
      operation: 'Donation',
      type: 'Plazma donation',
      amount: '6 pints',
      location: 'Nini Hospital',
      date: '2021-02-18T15:47:40.314Z',
    },
  ];

  return (
    <div>
      {history.map((h) => (
        <div class=" flex flex-col">
          <div className="-ml-44 text-xs text-gray-400 mt-1">
            {formatDate(h.date)}|10:am
          </div>
          <div class="">
            <div className="flex flex-row justify-between ">
              <div className="flex flex-row">
                <div className="ml-5 transform -rotate-90 text-xs text-gray-400 mb-1">
                  {h.operation}
                </div>
                <img className="-mt-8 -mb-3 -ml-12" src={circle} alt="circle" />
                <img
                  className="ml-1 mt-2 mb-5"
                  src={bloodIcon}
                  alt="blood icon"
                />
                <div className="flex flex-col">
                  <p className="mt-2 ml-2 text-gray-500">{h.type}</p>
                  <div className="flex flex-row">
                    <img className="ml-2" src={location} />{' '}
                    <span className="ml-1 mb-1 mt-1 text-xs text-gray-500">
                      {h.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-11 h-8 rounded-lg bg-gray-300 text-xs text-center pt-1 mt-3 mr-3">
                {h.amount}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HistoryItem;
