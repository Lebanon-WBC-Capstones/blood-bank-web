import React from 'react';
import TheNumberHydra from '../components/TheNumberHydra';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Graph from '../components/graph';
import CircleTR from '../assets/home-r-t-circles.svg';
import CircleTL from '../assets/home-l-t-circle-and-logo.svg';
import firstFooter from '../assets/home-first-page-footer.svg';
import footer from '../assets/Component 13.svg';

export default function Home() {
  return (
    <div className="overflow-auto">
      <div>
        <div className="relative top-0 h-screen w-screen">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div>
                {' '}
                <img src={CircleTL} alt="circle1" />
              </div>
              <div>
                {' '}
                <img src={CircleTR} alt="circle2" />{' '}
              </div>
            </div>
            <div
              className=" text-3xl font-bold font-roboto"
              style={{ marginLeft: '14%', marginTop: '-18vh' }}
            >
              <p style={{ color: 'rgba(108, 105, 105, 0.81)' }}>
                {' '}
                <span className="text-pri-red">Find</span> Local Blood <br />{' '}
                Donors <span className="text-pri-red">{'&'}</span> <br /> Blood{' '}
                <span className="text-pri-red">Centers</span>{' '}
              </p>
            </div>
          </div>
          <div style={{ paddingLeft: '10%' }}>
            <Graph />
          </div>

          <div style={{ marginTop: '20%' }}>
            {' '}
            {/*<div style={{marginBottom:"20%"}}><p> Blood <br /> Centers</p></div>*/}
            <img className="w-screen" src={footer} alt="ta3je" />
          </div>
        </div>
        <div className="bg-yellow-200 w-screen h-screen">
          <p>hfhjfdhjfghjfgd</p>
        </div>
        <div className="h-screen w-screen bottom-0 relative bg-green-200">
          <div className="relative -mb-32">
            <div style={{ paddingTop: '130%' }}>
              <TheNumberHydra />
            </div>
          </div>
          <div className="absolute bottom-0">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
