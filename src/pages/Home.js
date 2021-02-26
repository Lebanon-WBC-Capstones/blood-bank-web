import React from 'react';
import TheNumberHydra from '../components/TheNumberHydra';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Graph from '../components/graph';
import CircleTR from '../assets/home-r-t-circles.svg';
import CircleTL from '../assets/home-l-t-circle-and-logo.svg';
import firstFooter from '../assets/home-first-page-footer.svg';
import footer2 from '../assets/footer1.svg';
import footer from '../assets/Component 13.svg';
import header2 from '../assets/home-second-header.svg';
import foohed from '../assets/full-footer-header.svg';

export default function Home() {
  return (
    <div className="overflow-auto">
      <div>
        <div className="h-screen w-screen">
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

          <div>
            <img src={foohed} className="w-screen absolute top-10" />
          </div>
          <div
            style={{ paddingRight: '2%', paddingLeft: '8%' }}
            className="relative"
          >
            <Graph />
          </div>

          {/*<div style={{marginBottom:"20%"}}><p> Blood <br /> Centers</p></div>*/}
          {/*<img className="w-screen" src={foohed} alt="ta3je" />*/}
        </div>
        <div className="bg-yellow-200 w-screen h-screen">
          <div>{/*<img src={header2} alt="header" />*/}</div>
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
