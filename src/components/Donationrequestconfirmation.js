import React from 'react';

import bloodIcon from '../assets/blood.svg';
import personIcon from '../assets/person1.svg';
import location from '../assets/locationIcon.svg';
import call from '../assets/call.svg';
import pints from '../assets/pints.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
const DonationRequest = ({ t }) => {
  return (
    <div className="border-2 border-gray-200 w-80 h-52 ml-7 mt-3 rounded-md ">
      <div className="flex flex-col m-2">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-gray-500">
              Red Blood {t('donationform.request')}
            </h3>
          </div>
          <div>
            <img src={bloodIcon} alt="blood icon" />
          </div>
        </div>
        <div className="flex flex-col -mt-4">
          <div className="flex flex-row mb-1 ">
            <div>
              {' '}
              <img src={personIcon} alt="person icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">
              Nabigha mogharbel
            </div>
          </div>

          <div className="flex flex-row mb-1 ">
            <div>
              {' '}
              <img src={location} alt="location icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">
              Nini {t('donationform.hospital')}
            </div>
          </div>

          <div className="flex flex-row mb-1">
            <div>
              {' '}
              <img src={call} alt="call icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">4567890</div>
          </div>

          <div className="flex flex-row mb-1">
            <div>
              {' '}
              <img src={pints} alt="pints icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">
              6 {t('donationform.pints')}
            </div>
          </div>
        </div>
        <div>
          <Link to={`/appointment`}>
            <button className="text-gray-500 bg-red-100 rounded-md px-3.5 py-0.5">
              {t('donationform.done')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default withNamespaces()(DonationRequest);
