import React from 'react';
import AboutLayout from '../components/AboutLayout';
import AboutGraph from '../components/AboutGraph';
import TeamCircles from '../components/TeamCircles';
import ContactUs from '../components/ContactUs';
import AboutFooter from '../components/AboutFooter';
import { withNamespaces } from 'react-i18next';
function AboutUsPage({ t }) {
  return (
    <>
      <AboutLayout>
        <div
          className="absolute font-Roboto text-3xl font-bold"
          style={{ top: '30vw', left: '12vw' }}
        >
          <span className="text-red">About</span>
          <br />
          <span className="font-Roboto text-3xl mt-8 ml-5 font-bold text-grey">
            Our Services
          </span>
        </div>
        <div className="absolute" style={{ top: '65vw', left: '3vw' }}>
          <AboutGraph />
        </div>
        <div className="absolute " style={{ top: '190vw', right: '0' }}>
          {t('aboutus.our_team')}
        </div>
        <div
          className="absolute "
          style={{ top: '188vw', right: '0', left: '0' }}
        >
          <TeamCircles />
        </div>
        <div
          className="absolute "
          style={{ top: '370vw', right: '0', left: '0' }}
        >
          <ContactUs />
        </div>
        <div
          className="absolute "
          style={{ top: '475vw', right: '0', left: '0' }}
        >
          <AboutFooter />
        </div>
      </AboutLayout>
    </>
  );
}

export default withNamespaces()(AboutUsPage);
