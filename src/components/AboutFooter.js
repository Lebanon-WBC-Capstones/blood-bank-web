import React from 'react';
import wave from '../assets/footerWaves.svg';
import Facebook from '../assets/Facebook1.svg';
import Twitter from '../assets/Twitter.svg';
import Github from '../assets/Github.svg';
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
            <h2>{t('aboutus.hospitals')}</h2>
            <ul className="text-xs underline">
              <li>
                <a
                  href="https://www.hopitalnini.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('aboutus.nini')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.moph.gov.lb/en/HealthFacilities/view/3/188/74174/new-mazloum-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('aboutus.mazloum')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.hopitalhaykel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('aboutus.haykel')}
                </a>
              </li>
              <li>
                <a
                  href="https://moph.gov.lb/en/HealthFacilities/view/3/188/74169/al-mounla-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('aboutus.monla')}
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-0" style={{ width: '40vw' }}>
            <h2> {t('aboutus.terms')}</h2>
            <ul className="text-xs underline">
              <li>
                <span> {t('aboutus.privacy_policy')}</span>
              </li>
              <li>
                <span> {t('aboutus.terms_and_agreement')} </span>
              </li>
            </ul>
          </div>
          <div className="ml-12">
            <div>
              {' '}
              <img className="" src={Twitter} alt="twitter" />
            </div>
            <div>
              <img className="mt-2" src={Github} alt="github" />
            </div>
            <div>
              <img className="mt-2" src={Facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withNamespaces()(AboutFooter);
