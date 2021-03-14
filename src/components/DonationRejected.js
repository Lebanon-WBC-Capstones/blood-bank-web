import React from 'react';
import cell from '../assets/cell.svg';
import bone from '../assets/bone.svg';
import heart from '../assets/heart.svg';
import { withNamespaces } from 'react-i18next';
function DonationRejected({ t }) {
  return (
    <div className="flex flex-col">
      <div className="mb-64">
        <img
          src={bone}
          alt=""
          style={{ width: '25vw', position: 'absolute' }}
          id="bone"
        />
        <img alt="cell" className="c1" src={cell} />
        <img alt="cell" className="c2" src={cell} />
        <img alt="cell" className="c3" src={cell} />
        <img alt="cell" className="c4" src={cell} />
        <img alt="cell" className="c5" src={cell} />
        <img alt="cell" className="c6" src={cell} />
        <img alt="cell" className="c7" src={cell} />
        <img alt="cell" className="c8" src={cell} />
        <img
          src={heart}
          alt=""
          style={{ width: '30vw', position: 'absolute' }}
          id="heart"
        />{' '}
      </div>
      <div className="absolute animate-pulse text-pri-red  font-medium font-Roboto text-3xl mt-60 my-2 ml-12 p-10 sm:mb-10 sm:text-4xl">
        {t('donatereject.request_sent')}
      </div>
    </div>
  );
}

export default withNamespaces()(DonationRejected);
