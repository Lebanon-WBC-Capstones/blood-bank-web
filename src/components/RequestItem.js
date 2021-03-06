import React from 'react';
import locationIcon from '../assets/location.svg';
import warningIcon from '../assets/warningIcon.svg';
import bloodDropIcon from '../assets/bloodDropIcon.svg';
import { withNamespaces } from 'react-i18next';
const RequestItem = (props) => {
  const gettype = () => {
    switch (props.item_data.request_type) {
      case 'Plasma':
        return props.t('notification.plasma');
      case 'Red Cells':
        return props.t('notification.red_cells');
      case 'Blood Cells':
        return props.t('notification.blood');
      case 'Platelets':
        return props.t('notification.platelets');
      default:
        return null;
    }
  };

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
                {props.t('notification.hospital')}
              </span>
            </div>

            <div className="flex flex-row ml-2">
              <img src={warningIcon} alt="warningIcon" className="w-3 h-3" />
              <span className="text-xs ml-1 mb-1">
                {gettype()} |{' '}
                <span className="text-red-600">
                  {props.item_data.amount}
                  {props.t('notification.pints')}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className=" mr-5 mt-7 flex flex-col  animate-pulse">
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

export default withNamespaces()(RequestItem);
