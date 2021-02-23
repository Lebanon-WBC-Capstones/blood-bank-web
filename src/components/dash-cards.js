import React from 'react';
import donate from '../assets/dashboard-donate-logo.svg';
import request from '../assets/dashboard-request-logo.svg';
import drop from '../assets/dashboard-lastdonate-logo.svg';
import sandhour from '../assets/dashboard-daysleft-logo.svg';
import heart from '../assets/dashboard-totaldonate-logo.svg';

export default function DashCards() {
  return (
    <div class="pt-3 bg-transparent">
      <div class="mb-5 flex flex-row justify-evenly">
        <button
          style={{
            backgroundColor: 'rgba(247, 244, 250, 0.98)',
            display: 'grid',
            gridTemplateRows: '4 1 ',
            width: '30vw',
            height: '30vw',
            boxShadow: '0.25rem 0.25rem 0.25rem #F58B8B',
          }}
          class="rounded-lg pl-1 pr-1"
        >
          <div
            style={{ gridRowStart: '1', gridRowEnd: '2' }}
            class="pt-1 pl-2 pr-1"
          >
            <img
              src={request}
              style={{ height: '20vw' }}
              class="self-center"
              alt="donate-logo"
            />
          </div>

          <p
            class="text-s self-center font-roboto text-greyfont"
            style={{
              gridRowStart: '2',
              gridRowEnd: '3',
            }}
          >
            Request
          </p>
        </button>

        <button
          style={{
            backgroundColor: 'rgba(247, 244, 250, 0.98)',
            display: 'grid',
            gridTemplateRows: '4 1 ',
            width: '30vw',
            height: '30vw',
            boxShadow: '0.25rem 0.25rem 0.25rem #F58B8B',
          }}
          class="rounded-lg pl-1 pr-1"
        >
          <div
            style={{ gridRowStart: '1', gridRowEnd: '2' }}
            class="pt-1 pl-1 pr-1"
          >
            <img
              src={donate}
              style={{ height: '22vw' }}
              class="self-center"
              alt="donate-logo"
            />
          </div>

          <p
            class="text-s self-center font-roboto pb-1 text-greyfont"
            style={{
              gridRowStart: '2',
              gridRowEnd: '3',
            }}
          >
            Donate
          </p>
        </button>
      </div>

      <div class="ml-3 mb-3">
        <p class="text-m font-bold font-roboto text-greyfont">Your Donations</p>
      </div>

      <div class="ml-3 flex flex-row justify-evenly ">
        {/* <button
          style={{
            backgroundColor: 'rgba(236, 39, 39, 0.74)',
            display: 'grid',
            gridTemplateRows: '1fr 3fr 1fr',
            width: '27vw',
            height: '27vw',
            boxShadow: '0.25rem 0.25rem 0.25rem #F58B8B',
          }}
          class="rounded-lg pl-1 pr-1"
        >
          <div
            style={{
              gridRowStart: '1',
              gridRowEnd: '2',
            }}
            class="flex justify-end"
          >
            <img
              class="justify-self-end"
              style={{ height: '6vw' }}
              src={drop}
              alt="blooddrop"
            />
          </div>
          <div
            style={{
              gridRowStart: '2',
              gridRowEnd: '3',
            }}
            class="flex justify-center"
          >
            <p class="font-roboto text-white" style={{ fontSize: '10vw' }}>
              9{' '}
            </p>{' '}
            <p class="font-roboto text-white" style={{ fontSize: '5vw' }}>
              June
            </p>
          </div>
          <div style={{ gridRowStart: '3', gridRowEnd: '4' }}>
            <p class="font-roboto text-xs text-white">Last Donation</p>
          </div>
        </button> */}

        <button
          style={{
            backgroundColor: 'rgba(236, 39, 39, 0.74)',
            /*display: 'grid',
            gridTemplateRows: '1fr 3fr 1fr',*/
            width: '27vw',
            height: '27vw',
            /*boxShadow: '0.25rem 0.25rem 0.25rem #F58B8B',*/
          }}
          class="rounded-lg pl-1 pr-1 grid grid-rows-layout shadow-sm"
        >
          <div class="flex justify-end row-start-1 row-end-2">
            <img
              class="justify-self-end"
              style={{ height: '6vw' }}
              src={drop}
              alt="blooddrop"
            />
          </div>
          <div class="flex justify-center row-start-2 row-end-3">
            <p class="font-roboto text-white" style={{ fontSize: '10vw' }}>
              9{' '}
            </p>{' '}
            <p class="font-roboto text-white" style={{ fontSize: '5vw' }}>
              June
            </p>
          </div>
          <div class="row-start-3 row-end-4">
            <p class="font-roboto text-xs text-white">Last Donation</p>
          </div>
        </button>

        <button
          style={{
            backgroundColor: 'rgba(247, 244, 250, 0.98)',
            display: 'grid',
            gridTemplateRows: '1fr 3fr 1fr',
            width: '27vw',
            height: '27vw',
          }}
          class="rounded-lg pl-1 pr-1 shadow-sm"
        >
          <div
            style={{
              height: '20%',
              gridRowStart: '1',
              gridRowEnd: '2',
            }}
            class="flex justify-end"
          >
            <img
              class="justify-self-end"
              style={{ height: '6vw' }}
              src={heart}
              alt="heart"
            />
          </div>
          <div
            style={{
              gridRowStart: '2',
              gridRowEnd: '3',
              height: '60%',
            }}
            class="flex justify-center"
          >
            <p class="font-roboto text-greyfont" style={{ fontSize: '10vw' }}>
              10
            </p>
          </div>
          <div style={{ gridRowStart: '3', gridRowEnd: '4' }}>
            <p class="font-roboto text-xs text-greyfont">Total Donation</p>
          </div>
        </button>
        <button
          style={{
            backgroundColor: 'rgba(247, 244, 250, 0.98)',
            display: 'grid',
            gridTemplateRows: '1fr 3fr 1fr',
            width: '27vw',
            height: '27vw',
          }}
          class="rounded-lg pl-1 pr-1 shadow-sm"
        >
          {' '}
          <div
            style={{
              height: '20%',
              gridRowStart: '1',
              gridRowEnd: '2',
            }}
            class="flex justify-end"
          >
            <img
              class="justify-self-end"
              style={{ height: '6vw' }}
              src={sandhour}
              alt="sandhour"
            />
          </div>
          <div style={{ gridRowStart: '2', gridRowEnd: '3', height: '60%' }}>
            <p class="font-roboto text-greyfont" style={{ fontSize: '10vw' }}>
              12
            </p>
          </div>
          <div style={{ gridRowStart: '3', gridRowEnd: '4' }}>
            <p class="font-roboto text-xs text-greyfont">Days Left</p>
          </div>
        </button>
      </div>
    </div>
  );
}
