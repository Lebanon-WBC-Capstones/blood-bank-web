import React from 'react';
import BackPage from '../components/BackPage';
import Urgent from '../assets/Urgent-2.svg';
import Volunteer from '../assets/volunteer_1.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
function DonationTypePage({ t }) {
  return (
    <div>
      <BackPage title={t('donatetype.pick_your_target')}>
        <div className="mt-12 mb-5 flex flex-wrap   justify-center content-center h-full">
          <div class="mr-8">
            <Link to={`/urgent`}>
              <button
                style={{
                  backgroundColor: 'rgba(247, 244, 250, 0.98)',
                }}
                className="bg-white rounded-3xl mb-5 pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50 "
              >
                <div className="">
                  <img
                    src={Urgent}
                    alt="Urgent"
                    className="absolute mt-5 ml-8"
                  />
                </div>

                <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                  {t('donatetype.urgent')}
                </p>
              </button>
            </Link>
          </div>
          <div class="ml-8">
            <Link to={`/volunteer`}>
              <button
                style={{
                  backgroundColor: 'rgba(247, 244, 250, 0.98)',
                }}
                className="bg-white mb-20 rounded-3xl pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50 "
              >
                <div className="mt-2 pl-5 pr-1 ">
                  <img
                    src={Volunteer}
                    alt="Volunteer"
                    className="absolute w-16 h-16 mt-2 ml-2"
                  />
                </div>

                <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                  {t('donatetype.volunteer')}
                </p>
              </button>
            </Link>
          </div>
        </div>
      </BackPage>
    </div>
  );
}

export default withNamespaces()(DonationTypePage);
