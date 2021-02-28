import React from 'react';
import { Link } from 'react-router-dom';
import DashCards from '../components/dash-cards';
import DashProfile from '../components/dash-profile';
import feeds from '../assets/dashFeeds.svg';
import menu from '../assets/dashMenu.svg';
import { useState } from 'react';
import BottomWave from '../assets/backPageBottomWave.svg';

export default function Dashboard() {
  const [MenuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <div className="relative w-screen h-screen">
      {MenuIsVisible && <div>{/*menu*/}</div>}

      <div
        className="flex flex-row justify-between mx-5 mt-2"
        style={{ height: '5vh' }}
      >
        <div className="flex justiy-center">
          <img
            src={menu}
            onClick={() =>
              setMenuIsVisible((prevMenuIsVisible) => !prevMenuIsVisible)
            }
            alt="menu"
          />
        </div>
        <div className="flex justiy-center pt-4 text-lg font-roboto text-greyfont">
          <p>Layla</p>
        </div>
        <div className="flex justiy-center">
          <img src={feeds} alt="feeds" />
        </div>
      </div>
      <DashProfile />
      <div style={{ marginTop: '-2%' }}>
        <DashCards />
      </div>

      <div className="absolute" style={{ bottom: '0px' }}>
        <img src={BottomWave} className="w-screen" />
      </div>
    </div>
  );
}
