import React, { useEffect } from 'react';
import TheNumberHydra from '../components/TheNumberHydra';
import Footer from '../components/Footer';
import Graph from '../components/graph';
import LandingLayout from '../components/LandingLayout';
import HeroesCircles from '../components/HeroesCircles';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import getStarted from '../assets/Start.svg';
import Door from '../assets/door.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Home({ t }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <LandingLayout>
      <div
        data-aos="fade-right"
        className="absolute  "
        style={{ top: '175vw' }}
      >
        <Link to={`/signup`}>
          <button className="text-lg ml-16">
            <img src={getStarted} alt=" " className=" rounded w-12 h-7" />
          </button>
        </Link>
      </div>
      <div className="absolute ml-72 opacity-80" style={{ top: '3vw' }}>
        <Link to={`/signin`}>
          <div className=" flex flex-row">
            <div className="text-xs text-grey font-bold font-Roboto ml-5">
              {t('landingpage.goo_sign_in')}
            </div>
            <div>
              <button>
                {' '}
                <img src={Door} alt="" className="h-3 w-5 ml-1 mb-1" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" text-3xl text-left font-bold font-roboto absolute"
        style={{ top: '31vw', left: '9vw' }}
      >
        <p style={{ color: 'rgba(108, 105, 105, 0.81)' }}>
          <span className="text-red">{t('landingpage.find')} </span>
          {t('landingpage.local_blood')}
          <br />
          <span className="">
            {t('landingpage.donor')} <span className="text-red">{'&'}</span>{' '}
          </span>
          <br />
          {t('landingpage.donation')}{' '}
          <span className="text-red">{t('landingpage.centers')}</span>{' '}
        </p>
      </div>
      <div className="absolute mr-3" style={{ top: '135vw', left: '3vw' }}>
        <p className="text-white font-roboto text-lg">
          {t('landingpage.blood')} <br /> {t('landingpage.center')}
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="ml-4 absolute"
        style={{ top: '62vw', left: '5vw' }}
      >
        <Graph />
      </div>
      <div
        className="absolute font-roboto  text-2xl mr-5"
        style={{ top: '184vw', right: '1vw' }}
      >
        <div className="text-white ">MEET {t('landingpage.our')}</div>

        <span className="text-gray-600  ">{t('landingpage.heroes')}</span>
      </div>
      <div
        data-aos="zoom-in"
        className="absolute overflow-hidden "
        style={{ top: '197vw', left: '0vw', right: '0vw' }}
      >
        <HeroesCircles />
      </div>
      <div
        className="absolute text-sm text-grey opacity-80 font-Roboto font-medium ml-24"
        style={{ top: '315vw' }}
      >
        You don't have <br /> <span className="mr-12">to be a doctor</span>{' '}
        <br /> to save lives
      </div>
      <div>
        <div className="absolute" style={{ bottom: '139vw', left: '10vw' }}>
          <p className="text-2xl font-roboto text-gray-600">
            {t('landingpage.so_far')}
          </p>
          <p className="ml-6 text-xl font-roboto text-gray-500">
            {t('landingpage.we_have')}
          </p>
          <p className="ml-2 text-lg font-roboto text-gray-400">
            {t('landingpage.reached')}
          </p>
        </div>
        <div
          data-aos="fade-up-right"
          className="absolute w-screen sm:h-full"
          style={{ bottom: '55vw' }}
        >
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
