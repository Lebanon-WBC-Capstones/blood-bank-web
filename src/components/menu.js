import React from 'react';
import RignBell from '../assets/menuNotification.svg';
import Language from '../assets/menuLanguage.svg';
import History from '../assets/menuHistory.svg';
import LogOut from '../assets/menuLogOut.svg';
import arrow from '../assets/menuArrow.svg';
import Edit from '../assets/menuEdit.svg';
import menubg from '../assets/menuBg.svg';

export default function Menu(props) {
  function handleLogOut() {}
  return (
    <div
      className=" fixed h-screen w-3/4 top-0 pt-4 pl-4 font-roboto"
      style={{
        zIndex: '500',
        backgroundColor: 'rgba(255, 249, 249, 1)',
        backgroundImage: `url(${menubg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '90%',
      }}
    >
      <div className="pt-1" onClick={() => props.toggleMenu()}>
        {props.Icon}
      </div>
      <div className="flex flex-row mt-2 w-2/4">
        <div>
          <img src={props.pp} className="rounded-full border-4 border-white" />
        </div>
        <div className="flex flex-col ml-2">
          <div className="text-lg self-start">
            <p style={{ color: '#FFEEEE' }}>Layla</p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <img src={Edit} />
            </div>
            <div className="text-xs">
              <p style={{ color: '#FFEEEE', whiteSpace: 'no-wrap' }}>
                Edit Profile
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-black text-lg flex flex-col ml-6"
        style={{ marginTop: '70%' }}
      >
        <div className="flex flex-row mb-8">
          <div className="self-center mr-8">
            {' '}
            <img src={History} />
          </div>
          <div className="mr-20">
            <p>History</p>
          </div>
          <div className="self-center">
            <img src={arrow} />
          </div>
        </div>
        <div className="flex flex-row mb-8">
          <div className="self-center mr-8">
            <img src={RignBell} />
          </div>
          <div className="mr-11">
            <p>Notification</p>
          </div>
          <div className="self-center">
            <img src={arrow} />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="self-center mr-8">
            <img src={Language} />
          </div>
          <div className="mr-14" style={{ marginRight: '3.75rem' }}>
            <p>Language</p>
          </div>
          <div className="self-center">
            <img src={arrow} />
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-6" style={{ marginTop: '40%' }}>
        <img className="mr-9" src={LogOut} onClick={() => handleLogOut()} />
        <p className="mr-20">Log Out</p>
        <img src={arrow} />
      </div>
    </div>
  );
}
