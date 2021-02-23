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
  const svg1 = `<svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
  <path d="M30.2562 11.0206L20.3541 0.806967C19.8164 0.285421 18.9203 0.285419 18.3827 0.806962L8.48065 11.0205C2.47671 17.0617 2.52154 26.6234 8.5255 32.6646C14.5295 38.4451 24.2075 38.4451 30.2114 32.6647C36.2153 26.6235 36.2601 17.0618 30.2562 11.0206ZM29.2257 21.7122C29.2257 26.5365 24.7451 31.1 20.0405 31.1C19.2788 31.1 18.6964 30.535 18.6964 29.7962C18.6516 29.1008 19.234 28.5358 19.9509 28.4923C19.9957 28.4923 19.9957 28.4923 20.0405 28.4923C23.2665 28.4923 26.5373 25.0588 26.5373 21.7122C26.5373 20.9734 27.1198 20.4084 27.8815 20.4084C28.5984 20.3649 29.1808 20.9299 29.2257 21.6253C29.2257 21.6688 29.2257 21.6688 29.2257 21.7122Z" fill="#E10108"/>
  </g>
  <path d="M30.2562 11.0206L20.3541 0.806967C19.8164 0.285421 18.9203 0.285419 18.3827 0.806962L8.48065 11.0205C2.47671 17.0617 2.52154 26.6234 8.5255 32.6646C14.5295 38.4451 24.2075 38.4451 30.2114 32.6647C36.2153 26.6235 36.2601 17.0618 30.2562 11.0206ZM29.2257 21.7122C29.2257 26.5365 24.7451 31.1 20.0405 31.1C19.2788 31.1 18.6964 30.535 18.6964 29.7962C18.6516 29.1008 19.234 28.5358 19.9509 28.4923C19.9957 28.4923 19.9957 28.4923 20.0405 28.4923C23.2665 28.4923 26.5373 25.0588 26.5373 21.7122C26.5373 20.9734 27.1198 20.4084 27.8815 20.4084C28.5984 20.3649 29.1808 20.9299 29.2257 21.6253C29.2257 21.6688 29.2257 21.6688 29.2257 21.7122Z" fill="#FCF7F7" fill-opacity="0.96"/>
  <path d="M35 8.93824C35 13.1041 31.6662 16.4607 27.5789 16.4607C23.4917 16.4607 20.1579 13.1041 20.1579 8.93824C20.1579 4.77238 23.4917 1.41577 27.5789 1.41577C31.6662 1.41577 35 4.77238 35 8.93824Z" fill="#979191" fill-opacity="0.94" stroke="#FFF9F9" stroke-width="2"/>
  `;

  const svg2 = `<defs>
  <filter id="filter0_d" x="6.10352e-05" y="0.415771" width="38.7368" height="44.5842" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>`;

  const Am = `<path d="M17.7803 21.4976H13.3741L12.4522 24.146H10.3975L14.6944 12.771H16.4678L20.7725 24.146H18.71L17.7803 21.4976ZM13.9288 19.9038H17.2256L15.5772 15.1851L13.9288 19.9038Z" fill="#6A6868"/>
  <path d="M29.1103 8.43506H26.2509V7.55029H29.1103V8.43506Z" fill="#F7F9FB"/>`;

  const bloodtypes = {
    Aplus: Ap,
    Aminus: svg1 + Am + svg2,
    Oplus: Op,
    Ominus: om,
    Bplus: Bp,
    Bminus: Bm,
    ABplus: ABp,
    ABminus: ABm,
  };
  return (
    <div class="bg-transparent" className="flex flex-col justify-center">
      <div style={{ margin: '3vw' }} className="flex justify-center">
        {' '}
        <img style={{ borderRadius: '50%' }} src={pp} alt="profile-pic" />{' '}
      </div>
      <div
        style={{
          margin: '3vw',
        }}
        className="flex flex-row justify-center"
      >
        <div
          class="p-2"
          style={{
            backgroundColor: 'rgba(255, 231, 231, 1)',
            width: '33vw',
            height: '6vw',
            borderRadius: '1rem',
            alignItems: 'center',
          }}
          className="flex flex-row justify-evenly"
        >
          <img src={star} alt="location" style={{ marginRight: '3px' }} />{' '}
          <p class=" font-roboto text-s" sty>
            Hero Donor
          </p>
        </div>
      </div>
      <div
        style={{
          margin: '3vw',
        }}
        className="flex flex-row justify-center"
      >
        <img src={location} alt="location" /> <p>Tripoli</p>
      </div>
      <div style={{ margin: '3vw' }} className="flex justify-center">
        <img src={bloodtypes.Aminus} alt="bloodgroup" />
      </div>
    </div>
  );
}
