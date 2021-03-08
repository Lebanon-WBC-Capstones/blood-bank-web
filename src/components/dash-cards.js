import React from 'react';
import donate from '../assets/dashboard-donate-logo.svg';
import request from '../assets/dashboard-request-logo.svg';
import drop from '../assets/dashboard-lastdonate-logo.svg';
import sandhour from '../assets/dashboard-daysleft-logo.svg';
import heart from '../assets/dashboard-totaldonate-logo.svg';
import { Link } from 'react-router-dom';

export default function DashCards() {
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
                className="self-center"
                alt="donate-logo"
              />
            </div>

            <p className="text-s self-center font-roboto text-greyfont row-start-2 row-end-3">
              Request
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
                style={{ height: '22vw' }}
                className="self-center"
                alt="donate-logo"
              />
            </div>

            <p className="text-s self-center font-roboto pb-1 text-greyfont row-start-2 row-end-3">
              Donate
            </p>
          </button>
        </Link>
      </div>

      <div className="ml-3 mb-3">
        <p className="text-m font-bold font-roboto text-greyfont">
          Your Donations
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
              className="justify-self-end"
              style={{ height: '6vw' }}
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
            <p className="font-roboto text-xs text-white">Last Donation</p>
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
              className="justify-self-end"
              style={{ height: '6vw' }}
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
            <p class="font-roboto text-xs text-greyfont">Total Donation</p>
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
              className="justify-self-end"
              style={{ height: '6vw' }}
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
          <div className="row-start-3 row-end-4">
            <p className="font-roboto text-xs text-greyfont">Days Left</p>
          </div>
        </button>
      </div>
    </div>
  );
}
