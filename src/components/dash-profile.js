import React from 'react';
import Ap from '../assets/dashboard-A+.svg';
import Am from '../assets/dashboard-A-.svg';
import Bp from '../assets/dashboard-B+.svg';
import Bm from '../assets/dashboard-B-.svg';
import ABp from '../assets/dashboard-AB+.svg';
import ABm from '../assets/dashboard-AB-.svg';
import Op from '../assets/dashboard-O-.svg';
import om from '../assets/dashboard-O-.svg';
import location from '../assets/dashboard-location.svg';
import star from '../assets/dashboard-star.svg';
import pp from '../assets/profilepic.png';

export default function DashProfile() {
  const bloodtypes = {
    Aplus: Ap,
    Aminus: Am,
    Oplus: Op,
    Ominus: om,
    Bplus: Bp,
    Bminus: Bm,
    ABplus: ABp,
    ABminus: ABm,
  };
  return (
    <div
      class="bg-transparent"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3vw' }}>
        {' '}
        <img style={{ borderRadius: '50%' }} src={pp} alt="profile-pic" />{' '}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: '3vw',
        }}
      >
        <div
          class="p-2"
          style={{
            backgroundColor: 'rgba(255, 231, 231, 1)',
            width: '33vw',
            height: '6vw',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: '1rem',
            alignItems: 'center',
          }}
        >
          <img src={star} alt="location" style={{ marginRight: '3px' }} />{' '}
          <p class=" font-roboto text-s" sty>
            Hero Donor
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: '3vw',
        }}
      >
        <img src={location} alt="location" /> <p>Tripoli</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3vw' }}>
        <img src={bloodtypes.ABplus} alt="bloodgroup" />
      </div>
    </div>
  );
}
