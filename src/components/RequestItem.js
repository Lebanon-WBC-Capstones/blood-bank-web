import React from 'react';
import locationIcon from '../assets/location.svg';
import callIcon from '../assets/callIcon.svg';
import warningIcon from '../assets/warningIcon.svg';
import bloodDropIcon from '../assets/bloodDropIcon.svg';

const RequestItem = (props) => {
  return (
    <div className="container max-width: 640px ">
      <div className="flex flex-row rounded-xl ml-2 mr-2 mt-3 justify-between border-2">
        <div className="flex flex-row">
          <div>
            <img
              src={props.item_user.avatar}
              alt="profile"
              className="rounded-full w-12 h-12 mt-2 ml-3"
            />
          </div>

          <div className="flex flex-col  ml-2 mb-2 text-gray-500">
            <div className="mt-2 text-xl">{props.item_user.username}</div>

            <div className="flex flex-row ml-2 mt-1">
              <img src={locationIcon} alt="location" className="w-3 h-3" />
              <span className="text-xs ml-1 mb-1">
                {props.item_data.location}
              </span>
            </div>

            <div className="flex flex-row ml-2">
              <img src={callIcon} alt="callIcon" className="w-3 h-3 " />
              <span className="text-xs ml-1 mb-1">{props.item_data.phone}</span>
            </div>

            <div className="flex flex-row ml-2">
              <img src={warningIcon} alt="warningIcon" className="w-3 h-3" />
              <span className="text-xs ml-1 mb-1">
                {props.item_data.request_type} |{' '}
                <span className="text-red-600">{props.item_data.amount}</span>
              </span>
            </div>
          </div>
        </div>
        <div className=" mr-5 mt-7 flex flex-col">
          <div>
            <img src={bloodDropIcon} alt="bloodDropIcon" className="ml-4" />
          </div>
          <div className="-mt-7 text-white text-sm ml-4">
            {props.item_data.blood_type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
