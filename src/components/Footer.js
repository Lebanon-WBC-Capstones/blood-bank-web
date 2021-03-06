import React from 'react';
import wave from '../assets/waves.svg';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
function AboutFooter({ t }) {
  return (
    <div className="relative text-white text-left font-roboto">
      <div>
        <img src={wave} className="w-screen" alt="waves" />
      </div>
      <div className="flex flex-col w-screen absolute" style={{ bottom: '0' }}>
        <div
          style={{ paddingLeft: '5vw' }}
          className="flex flex-row pb-3 w-screen"
        >
          <div style={{ width: '30vw' }}>
            <h2>{t('landingpage.hospitals')}</h2>
            <ul className="text-xs underline">
              <li>
                <a
                  href="https://www.hopitalnini.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('landingpage.nini')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.moph.gov.lb/en/HealthFacilities/view/3/188/74174/new-mazloum-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('landingpage.mazloum')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.hopitalhaykel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('landingpage.haykel')}
                </a>
              </li>
              <li>
                <a
                  href="https://moph.gov.lb/en/HealthFacilities/view/3/188/74169/al-mounla-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('landingpage.monla')}
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-0" style={{ width: '40vw' }}>
            <h2>{t('landingpage.terms')}</h2>
            <ul className="text-xs underline">
              <li>
                <span>{t('landingpage.privacy_policy')}</span>
              </li>
              <li>
                <span>{t('landingpage.terms_and_agreement')}</span>
              </li>
            </ul>
          </div>
          <div className=" text-lg mb-16 underline">
            {' '}
            <Link to={`/aboutus`}>
              <h2>{t('landingpage.about_us')}</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withNamespaces()(AboutFooter);
