import React, { useState } from 'react';
import pintsLogo from '../assets/pintsLogo.svg';
import quesLogo from '../assets/quesLogo.svg';
import humanLogo from '../assets/humanLogo.svg';
import clock from '../assets/clock.svg';
import smallBlood from '../assets/smallBlood.svg';
import smallTahaleb from '../assets/smallTahaleb.svg';

const FeedItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleDivSizeChange = () => {
    setOpen(!open);
  };
  const formatDate = (string) => {
    let options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  };

  return (
    <div className="-mt-8 ">
      <div
        className={
          'flex flex-col rounded-lg border-2 bg-white mt-10 h-14 overflow-hidden ' +
          (open ? 'h-44' : '')
        }
        onClick={handleDivSizeChange}
      >
        <div className="  h-14 ml-3 flex flex-row justify-between">
          <div className="flex flex-row">
            <img
              src={props.item_user.avatar}
              alt="profile"
              className="rounded-full w-11 h-11 mt-1"
            />
            <p className="mt-3 ml-2">
              <span className="text-gray-500 text-sm">
                {props.item_user.username}{' '}
              </span>
              <span className="text-gray-500 text-sm">
                {props.item_data.operation} is{' '}
              </span>
              <span className="text-pri-red text-sm">Fulfilled</span>
            </p>
          </div>
          <div className="text-gray-300 text-xs mr-2 mt-4 flex flex-row ">
            <img src={clock} alt="clock" className="w-4 h-4" />
            <span className="ml-1">{formatDate(props.item_data.date)}</span>
          </div>
        </div>

        <div className="bg-pink ml-16 rounded-xl  mr-5 flex flex-row justify-between">
          <div className="mt-5 -ml-5">
            <img src={smallTahaleb} alt="smallTahaleb" className="w-20 h-20 " />
          </div>
          <div className="-ml-10">
            <div className="flex flex-row ">
              <img
                src={pintsLogo}
                alt="pintsLogo"
                className=" w-6 h-6 mt-2 ml-2"
              />
              <span className="text-gray-500 text-xs mt-2 ml-1">
                {props.item_data.amount}{' '}
              </span>
            </div>

            <div className="flex flex-row ">
              <img
                src={quesLogo}
                alt="quesLogo"
                className=" w-6 h-6 mt-2 ml-2"
              />
              <span className="text-gray-500 text-xs mt-2 ml-1">
                {props.item_data.reason}{' '}
              </span>
            </div>

            <div className="flex flex-row ">
              <img
                src={humanLogo}
                alt="humanLogo"
                className=" w-6 h-6 mt-2 ml-2 mb-2"
              />
              <span className="text-gray-500 text-xs mt-3 ml-1">
                {props.item_data.donors[0]}, {props.item_data.donors[1]}, and{' '}
                {props.item_data.donors.length - 2} Others
              </span>
            </div>
          </div>
          <div className="mr-2">
            <img
              src={smallBlood}
              alt="smallBlood"
              className="w-6 h-6 mt-2 ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
