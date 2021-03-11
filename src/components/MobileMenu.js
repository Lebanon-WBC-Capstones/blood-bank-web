import * as React from 'react';
import menuCircle from '../assets/menuCircle.svg';
import editIcon from '../assets/editIcon.svg';
import historyIcon from '../assets/historyIcon.svg';
import notificationIcon from '../assets/notificationIcon.svg';
import languageIcon from '../assets/languageIcon.svg';
import logoutIcon from '../assets/logoutIcon.svg';
import smallGo from '../assets/smallGo.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
const MobileMenu = ({ t }) => {
  return (
    <div className="container max-width: 640px">
      <div className="flex flex-row">
        <div>
          <img src={menuCircle} alt="menuCircle" />
        </div>
        <div className="flex flex-row -ml-64 mt-8">
          <div>
            <img
              src="https://user-images.githubusercontent.com/12988551/108382684-1f03f000-721a-11eb-901b-3419f392e548.png"
              alt="profile"
              className="rounded-full w-20 h-20 mt-2 ml-3"
            />
          </div>
          <div className="flex flex-col mt-6 ml-3">
            <div className="text-xl text-white">Jolie Hobloss</div>
            <div className="flex flex-row mt-1">
              <img src={editIcon} alt="editIcon" />

              <Link to={`/editdetails`}>
                <div className="text-white text-xs ml-1">
                  {t('menu.edit_details')}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  ml-16 mr-5 -mt-20">
        <Link to={`/history`}>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <img src={historyIcon} alt="historyIcon" />
              <span className="ml-3">{t('menu.history')}</span>
            </div>
            <div>
              <img src={smallGo} alt="smallGo" className="mt-1" />
            </div>
          </div>
        </Link>

        <Link to={`/notification`}>
          {' '}
          <div className="flex flex-row justify-between mt-10">
            <div className="flex flex-row">
              <img src={notificationIcon} alt="notificationIcon" />
              <span className="ml-3">{t('menu.notifications')}</span>
            </div>
            <div>
              <img src={smallGo} alt="smallGo" className="mt-1" />
            </div>
          </div>
        </Link>

        <div className="flex flex-row justify-between mt-10">
          <div className="flex flex-row">
            <img src={languageIcon} alt="languageIcon" />
            <span className="ml-3">{t('menu.language')}</span>
          </div>
          <div>
            <img src={smallGo} alt="smallGo" className="mt-1" />
          </div>
        </div>

        <Link to={`/signin`}>
          <div className="flex flex-row justify-between mt-40">
            <div className="flex flex-row">
              <img src={logoutIcon} alt="languageIcon" />
              <span className="ml-3">{t('menu.log_out')}</span>
            </div>
            <div>
              <img src={smallGo} alt="smallGo" className="mt-1" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
