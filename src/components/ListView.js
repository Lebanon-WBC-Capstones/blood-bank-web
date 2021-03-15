import React from 'react';
import Location from '../assets/location.svg';
import Clock from '../assets/clock-2.svg';
import moment from 'moment';
import BloodCells from '../assets/bloodcells.svg';
import Platelets from '../assets/plasma.svg';
import BloodTube from '../assets/bloodtube_1.svg';
import BloodContainer from '../assets/bloodContainer.svg';
function ListView(props) {
  const formatDate = (myDate) => {
    if (moment().diff(myDate, 'days') > 7) {
      return moment(myDate).format('MMM DD, YYYY');
    } else {
      return moment(myDate).fromNow();
    }
  };
  const gettype = () => {
    switch (props.item_data) {
      case 'Plasma Request':
        return BloodTube;
      case 'Red Cells Request':
        return BloodCells;
      case 'Blood Request':
        return BloodContainer;
      case 'Platelets Request':
        return Platelets;
      default:
        return null;
    }
  };
  return (
    <div className="container max-w-screen-sm">
      <div className="flex flex-row rounded-xl ml-2 mr-2 mt-3 justify-between border-2 ">
        <div className="flex flex-row">
          <div>
            <img src={gettype()} alt="Type" className=" w-12 h-12 mt-2 ml-3" />
          </div>
          <div className="flex flex-col  ml-2 mb-2 text-gray-500">
            <div className="mt-2 text-xl">{props.item_data}</div>

            <div className="flex flex-row ml-2 mt-1">
              <img src={Location} alt="location" className="w-3 h-3 mt-1" />
              <span className="text-xs ml-1 mb-1 mt-0.5">{props.location}</span>
            </div>
          </div>
        </div>
        <div className="text-gray-300 text-xs mr-2 mt-5 flex flex-row ">
          <img src={Clock} alt="clock" className="w-4 h-4" />
          <span className="ml-1">{formatDate(props.date)}</span>
        </div>
      </div>
    </div>
  );
}

export default ListView;
