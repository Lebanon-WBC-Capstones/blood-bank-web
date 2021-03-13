import React from 'react';
import TheNumberHydra from '../components/TheNumberHydra';
import Footer from '../components/Footer';
import Graph from '../components/graph';
import LandingLayout from '../components/LandingLayout';
import HeroesCircles from '../components/HeroesCircles';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
function Home({ t }) {
  return (
    <LandingLayout>
      <div
        className=" text-3xl font-bold font-roboto absolute"
        style={{ top: '30vw', left: '8vw' }}
      >
        <Link to={`/signup`}>
          <button className="text-lg mr-8">
            {t('landingpage.goo_sign_up')}
          </button>
        </Link>
        <Link to={`/signin`}>
          <button className="text-lg">{t('landingpage.goo_sign_in')}</button>
        </Link>

        <p style={{ color: 'rgba(108, 105, 105, 0.81)' }}>
          <span className="text-pri-red">{t('landingpage.find')}</span>
          {t('landingpage.local_blood')}
          <br />
          {t('landingpage.donor')} <span className="text-pri-red">{'&'}</span>{' '}
          <br />
          {t('landingpage.donation')}{' '}
          <span className="text-pri-red">{t('landingpage.centers')}</span>{' '}
        </p>
      </div>
      <div className="absolute mr-3" style={{ top: '135vw', left: '3vw' }}>
        <p className="text-white font-roboto text-lg">
          {t('landingpage.blood')} <br /> {t('landingpage.center')}
        </p>
      </div>
      <div className="absolute" style={{ top: '60vw', left: '5vw' }}>
        <Graph />
      </div>
      <div
        className="absolute text-white font-roboto text-2xl mr-5"
        style={{ top: '185vw', right: '15vw' }}
      >
        <div>
          <p>{t('landingpage.our')}</p>
        </div>
        <div className="flex flex-end pl-4">
          <p>{t('landingpage.heroes')}</p>
        </div>
      </div>
      <div
        className="absolute mx-auto my-auto overflow-hidden"
        style={{ top: '210vw', left: '0vw' }}
      >
        <HeroesCircles className="overflow-hidden mx-auto my-auto" />
      </div>
      <div>
        <div className="absolute" style={{ bottom: '140vw', left: '10vw' }}>
          <p className="text-xl font-roboto text-gray-600">
            {t('landingpage.so_far')}
          </p>
          <p className="ml-3 text-lg font-roboto text-gray-500">
            {t('landingpage.we_have')}
          </p>
          <p className="ml-6 text-base font-roboto text-gray-400">
            {t('landingpage.reached')}
          </p>
        </div>
        <div className="absolute w-screen sm:h-full" style={{ bottom: '55vw' }}>
          <TheNumberHydra />
        </div>
        <div className="absolute w-screen sm:h-full" style={{ bottom: '0' }}>
          {' '}
          <Footer />
        </div>
      </div>
    </LandingLayout>
  );
}
export default withNamespaces()(Home);
