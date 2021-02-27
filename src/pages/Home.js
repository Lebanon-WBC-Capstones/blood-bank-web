import React from 'react';
import TheNumberHydra from '../components/TheNumberHydra';
import Footer from '../components/Footer';
import Graph from '../components/graph';
import LandingLayout from '../components/LandingLayout';

export default function Home() {
  return (
    <LandingLayout>
      <div
        className=" text-3xl font-bold font-roboto absolute"
        style={{ top: '30vw', left: '8vw' }}
      >
        <p style={{ color: 'rgba(108, 105, 105, 0.81)' }}>
          <span className="text-pri-red">Find</span> Local Blood <br /> Donors{' '}
          <span className="text-pri-red">{'&'}</span> <br /> Blood{' '}
          <span className="text-pri-red">Centers</span>{' '}
        </p>
      </div>
      <div className="absolute mr-3" style={{ top: '135vw', left: '3vw' }}>
        <p className="text-white font-roboto text-lg">
          Blood <br /> Center
        </p>
      </div>
      <div className="absolute" style={{ top: '60vw', left: '5vw' }}>
        <Graph />
      </div>
      <div>
        <div className="absolute" style={{ bottom: '140vw', left: '10vw' }}>
          <p className="text-xl font-roboto text-gray-600"> So Far</p>
          <p className="ml-3 text-lg font-roboto text-gray-500">We have</p>
          <p className="ml-6 text-base font-roboto text-gray-400">Reached</p>
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
