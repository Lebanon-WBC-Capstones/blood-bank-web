import React, { useState } from 'react';
import RignBell from '../assets/notificationIcon.svg';
import Language from '../assets/menuLanguage.svg';
import History from '../assets/menuHistory.svg';
import LogOut from '../assets/menuLogOut.svg';
import arrow from '../assets/menuArrow.svg';
import Edit from '../assets/menuEdit.svg';
import menubg from '../assets/menuBg.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

function Menu(props) {
  function handleLogOut() {}
  const [lang, setLang] = useState('EN');
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
          <img
            src={props.pp}
            alt=" "
            className="rounded-full border-4 border-white"
          />
        </div>
        <div className="flex flex-col ml-2">
          <div className="text-lg self-start">
            <p style={{ color: '#FFEEEE' }}>Layla</p>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <img src={Edit} alt=" " />
            </div>
            <Link to={`/editdetails`}>
              <div className="text-xs">
                <p style={{ color: '#FFEEEE', whiteSpace: 'no-wrap' }}>
                  {props.t('menu.edit_details')}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="text-black text-lg flex flex-col ml-6"
        style={{ marginTop: '70%' }}
      >
        <Link to={`/history`}>
          <div className="flex flex-row mb-8">
            <div className="self-center mr-8">
              {' '}
              <img src={History} alt=" " />
            </div>
            <div className="mr-20">
              <p> {props.t('menu.history')}</p>
            </div>
            <div className="self-center">
              <img src={arrow} alt=" " />
            </div>
          </div>
        </Link>
        <Link to={`/notification`}>
          <div className="flex flex-row mb-8">
            <div className="self-center mr-8">
              <img src={RignBell} alt=" " />
            </div>
            <div className="mr-11">
              <p> {props.t('menu.notifications')}</p>
            </div>
            <div className="self-center">
              <img src={arrow} alt=" " />
            </div>
          </div>
        </Link>
        <div className="flex flex-row">
          <div className="self-center mr-8">
            <img src={Language} alt=" " />
          </div>
          <div className="mr-14" style={{ marginRight: '3.75rem' }}>
            <p>{props.t('menu.language')}</p>
          </div>
          <div className="self-center text-sm">
            <select
              name="selectLanguage"
              id="selectLanguage"
              onChange={() => {
                let x = document.getElementById('selectLanguage').value;
                console.log(x);
                if (x === 'en') {
                  props.i18n.changeLanguage('en');
                  document.body.dir = props.i18n.dir();
                  setLang('EN');
                } else if (x === 'ar') {
                  props.i18n.changeLanguage('ar');
                  document.body.dir = props.i18n.dir();
                  setLang('AR');
                } else {
                  props.i18n.changeLanguage('fr');
                  document.body.dir = props.i18n.dir();
                  setLang('FR');
                }
              }}
            >
              <option value="en">En</option>
              <option value="ar">AR</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </div>
      </div>
      <Link to={`/signin`}>
        <div className="flex flex-row ml-6" style={{ marginTop: '40%' }}>
          <img
            className="mr-9"
            alt=" "
            src={LogOut}
            onClick={() => handleLogOut()}
          />
          <p className="mr-20">{props.t('menu.log_out')}</p>
          <img src={arrow} alt=" " />
        </div>
      </Link>
    </div>
  );
}

export default withNamespaces()(Menu);
