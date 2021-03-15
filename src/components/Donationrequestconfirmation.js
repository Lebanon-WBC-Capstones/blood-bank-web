import React from 'react';
import { useParams } from 'react-router-dom';
import personIcon from '../assets/person1.svg';
import location from '../assets/locationIcon.svg';
import call from '../assets/call.svg';
import pints from '../assets/pints.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import BloodCells from '../assets/bloodcells.svg';
import Platelets from '../assets/plasma.svg';
import BloodTube from '../assets/bloodtube_1.svg';
import BloodContainer from '../assets/bloodContainer.svg';

const DonationRequest = ({ t }) => {
  const { name: namex } = useParams();
  const { phone: phonex } = useParams();
  const { location: locationx } = useParams();
  const { pints: pintsx } = useParams();
  const { type: typex } = useParams();

  const gettype = () => {
    switch (typex) {
      case 'Plasma':
        return BloodTube;
      case 'Red Cells':
        return BloodCells;
      case 'Blood':
        return BloodContainer;
      case 'Platelets':
        return Platelets;
      default:
        return null;
    }
  };

  return (
    <div
      className="border-2 border-gray-200 h-52 ml-6 mt-5 rounded-lg "
      style={{ width: '88%' }}
    >
      <div className="flex flex-col m-2">
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="text-gray-500 ml-2 mt-1 font-medium font-Roboto">
              {typex} {t('donationform.request')}
            </h3>
          </div>
          <div className="mr-2">
            <img src={gettype()} alt="blood icon" />
          </div>
        </div>
        <div className="flex flex-col -mt-4 px-2 py-1">
          <div className="flex flex-row mb-1 ">
            <div>
              {' '}
              <img src={personIcon} alt="person icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">{namex}</div>
          </div>

          <div className="flex flex-row mb-1 ">
            <div>
              {' '}
              <img src={location} alt="location icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">
              {locationx} {t('donationform.hospital')}
            </div>
          </div>

          <div className="flex flex-row mb-1">
            <div>
              {' '}
              <img src={call} alt="call icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">{phonex}</div>
          </div>

          <div className="flex flex-row mb-1">
            <div>
              {' '}
              <img src={pints} alt="pints icon" />{' '}
            </div>
            <div className="text-xs text-gray-500 ml-2 mt-1">
              {pintsx} {t('donationform.pints')}
            </div>
          </div>
        </div>
        <div>
          <Link to={`/appointment/${locationx}/${pintsx}/${typex}`}>
            <button className="border-pink border-2 mb-2 text-gray-500  bg-pink rounded-md px-3.5 py-0.5">
              {t('donationform.donate')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default withNamespaces()(DonationRequest);
