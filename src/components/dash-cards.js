import React from 'react';
import donate from '../assets/dashboard-donate-logo.svg';
import request from '../assets/dashboard-request-logo.svg';
import drop from '../assets/dashboard-lastdonate-logo.svg';
import sandhour from '../assets/dashboard-daysleft-logo.svg';
import heart from '../assets/dashboard-totaldonate-logo.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
function DashCards({ t }) {
  return (
    <div className="pt-3 bg-transparent">
      <div className="mb-5 flex flex-row justify-evenly">
        <Link to={`/request`}>
          <button
            style={{
              backgroundColor: 'rgba(247, 244, 250, 0.98)',
              width: '30vw',
              height: '30vw',
            }}
            className="rounded-lg pl-1 pr-1 shadow-sm grid grid-rows-layout2"
          >
            <div className="pt-1 pl-2 pr-1 row-start-1 row-end-2">
              <img
                src={request}
                style={{ height: '20vw' }}
                className="self-center ml-5"
                alt="donate-logo"
              />
            </div>

            <p className="text-xs pb-1 font-medium self-center font-Roboto text-greyfont row-start-2 row-end-3">
              {t('dashboard.request')}
            </p>
          </button>
        </Link>
        <Link to={`/donation`}>
          <button
            style={{
              backgroundColor: 'rgba(247, 244, 250, 0.98)',
              width: '30vw',
              height: '30vw',
            }}
            className="rounded-lg pl-1 pr-1 shadow-sm grid grid-rows-layout2"
          >
            <div className="pt-1 pl-1 pr-1 row-start-1 row-end-2">
              <img
                src={donate}
                style={{ height: '20vw' }}
                className="self-center ml-3 mt-1"
                alt="donate-logo"
              />
            </div>

            <p className="text-xs pb-1 font-medium self-center font-roboto pb-1 text-greyfont row-start-2 row-end-3">
              {t('dashboard.donate')}
            </p>
          </button>
        </Link>
      </div>

      <div className=" mb-3 mr-52">
        <p className="text-md font-medium font-roboto text-greyfont">
          {t('dashboard.your_donations')}
        </p>
      </div>

      <div className="ml-3 flex flex-row justify-evenly ">
        <button
          style={{
            backgroundColor: 'rgba(236, 39, 39, 0.74)',
            width: '27vw',
            height: '27vw',
          }}
          className="rounded-lg pl-1 pr-1 grid grid-rows-layout shadow-sm"
        >
          <div className="flex justify-end row-start-1 row-end-2">
            <img
              className="justify-self-end mt-2 mr-1"
              style={{ height: '5vw' }}
              src={drop}
              alt="blooddrop"
            />
          </div>
          <div className="flex justify-center row-start-2 row-end-3">
            <p className="font-roboto text-white" style={{ fontSize: '10vw' }}>
              9{' '}
            </p>{' '}
            <p className="font-roboto text-white" style={{ fontSize: '5vw' }}>
              June
            </p>
          </div>
          <div className="row-start-3 row-end-4">
            <p className="font-Roboto text-xs text-white">
              {' '}
              {t('dashboard.last_donation')}
            </p>
          </div>
        </button>

        <button
          style={{
            backgroundColor: 'rgba(247, 244, 250, 0.98)',
            width: '27vw',
            height: '27vw',
          }}
          className="rounded-lg pl-1 pr-1 grid grid-rows-layout shadow-sm"
        >
          <div className="flex justify-end row-start-1 row-end-2">
            <img
              className="justify-self-end mt-2 mr-1"
              style={{ height: '5vw' }}
              src={heart}
              alt="heart"
            />
          </div>
          <div
            style={{
              height: '60%',
            }}
            className="flex justify-center row-start-2 row-end-3"
          >
            <p
              className="font-roboto text-greyfont"
              style={{ fontSize: '10vw' }}
            >
              10
            </p>
          </div>
          <div className="row-start-3 row-end-4">
            <p className="font-roboto text-xs text-greyfont">
              {' '}
              {t('dashboard.total_donation')}
            </p>
          </div>
        </button>
        <button
          style={{
            backgroundColor: 'rgba(247, 244, 250, 0.98)',
            width: '27vw',
            height: '27vw',
          }}
          className="rounded-lg pl-1 pr-1 grid grid-rows-layout shadow-sm"
        >
          {' '}
          <div className="flex justify-end row-start-1 row-end-2">
            <img
              className="justify-self-end mt-2"
              style={{ height: '5vw' }}
              src={sandhour}
              alt="sandhour"
            />
          </div>
          <div style={{ height: '60%' }} className="row-start-2 row-end-3">
            <p
              className="font-roboto text-greyfont"
              style={{ fontSize: '10vw' }}
            >
              12
            </p>
          </div>
          <div className="row-start-3 row-end-4 ">
            <p className="font-roboto text-xs text-greyfont ">
              {' '}
              {t('dashboard.days_left')}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
export default withNamespaces()(DashCards);
