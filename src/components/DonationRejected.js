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
      <div className="text-gray-600 font-normal text-2xl mt-64 my-2 align-center p-10 sm:mb-10 sm:text-4xl">
        {t('donatereject.your_last_donation')}
        <br />
        {t('donatereject.was_days_ago')}
        <br />
        {t('donatereject.let_your_bones_do_their_job')}
      </div>
    </div>
  );
}

export default withNamespaces()(DonationRejected);
