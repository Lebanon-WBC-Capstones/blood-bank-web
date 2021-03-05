import React from 'react';
import { Link } from 'react-router-dom';
import DashCards from '../components/dash-cards';
import DashProfile from '../components/dash-profile';
import feeds from '../assets/dashFeeds.svg';
import { useState } from 'react';
import Menu from '../components/menu';
import BottomWave from '../assets/backBottomWave.svg';
import pp from '../assets/profilepic.png';

export default function Dashboard() {
  const [MenuIsVisible, setMenuIsVisible] = useState(false);
  function toggleMenu() {
    setMenuIsVisible((prevMenuIsVisible) => !prevMenuIsVisible);
  }
  function Icon(color) {
    return (
      <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0.99999C0 0.44771 0.447711 0 0.99999 0H16C16.5523 0 17 0.44771 17 0.99999C17 1.55227 16.5523 1.99998 16 1.99998H0.999991C0.447712 1.99998 0 1.55227 0 0.99999ZM0 6.99977C0 6.44749 0.447711 5.99978 0.99999 5.99978H16C16.5523 5.99978 17 6.44749 17 6.99977C17 7.55205 16.5523 7.99976 16 7.99976H0.999991C0.447712 7.99976 0 7.55205 0 6.99977ZM0.99999 12.0002C0.447711 12.0002 0 12.4479 0 13.0002C0 13.5524 0.447712 14.0002 0.999991 14.0002H16C16.5523 14.0002 17 13.5524 17 13.0002C17 12.4479 16.5523 12.0002 16 12.0002H0.99999Z"
          fill={color}
          fill-opacity="0.74"
        />
      </svg>
    );
  }
  return (
    <div
      className=" w-screen h-screen m-0 pt-2"
      style={{ backgroundColor: 'rgba(255, 249, 249, 1)' }}
    >
      {MenuIsVisible && (
        <Menu
          className="fixed"
          toggleMenu={toggleMenu}
          Icon={Icon('#FEDCDC')}
          pp={pp}
        />
      )}
      <div
        className="flex flex-row justify-between mx-5 pt-2"
        style={{ height: '5vh' }}
      >
        <div className="flex justiy-center pt-1" onClick={() => toggleMenu()}>
          {Icon('#716A6A')}
        </div>
        <div className="flex justiy-center  text-lg font-roboto text-greyfont">
          <p>Layla</p>
        </div>
        <div className="flex justiy-center">
          <img src={feeds} alt="feeds" />
        </div>
      </div>
      <DashProfile pp={pp} />

      <DashCards />

      <div
        className="absolute w-screen"
        style={{
          bottom: '0px',
          height: '10%',
        }}
      >
        <img
          src={BottomWave}
          className="w-screen"
          style={{ height: '100%', objectFit: 'cover', objectPosition: '0 0' }}
        />
      </div>
    </div>
  );
}
