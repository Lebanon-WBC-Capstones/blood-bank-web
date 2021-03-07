import React from 'react';
import wave from '../assets/waves.svg';
import Facebook from '../assets/Facebook1.svg';
import Twitter from '../assets/Twitter.svg';
import Github from '../assets/Github.svg';

export default function Footer() {
  return (
    <footer className="relative text-white font-roboto">
      <div>
        <img src={wave} className="w-screen" alt="waves" />
      </div>
      <div className="flex flex-col w-screen absolute" style={{ bottom: '0' }}>
        <div style={{ paddingLeft: '5vw' }} className="flex flex-row w-screen">
          <div style={{ width: '30vw' }}>
            <h2>Hospital</h2>
            <ul className="text-xs underline">
              <li>
                <a
                  href="https://www.hopitalnini.com/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nini
                </a>
              </li>
              <li>
                <a
                  href="https://www.moph.gov.lb/en/HealthFacilities/view/3/188/74174/new-mazloum-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mazloum
                </a>
              </li>
              <li>
                <a
                  href="https://www.hopitalhaykel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Haykal
                </a>
              </li>
              <li>
                <a
                  href="https://moph.gov.lb/en/HealthFacilities/view/3/188/74169/al-mounla-hospital/?facility_type=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Monla
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-0" style={{ width: '40vw' }}>
            <h2>Terms</h2>
            <ul className="text-xs underline">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms and Agreement </a>
              </li>
            </ul>
          </div>
          <div style={{ width: '20vw' }}>
            <h2>About Us</h2>
          </div>
        </div>
        <div className="flex-auto">
          <h2 className="text-lg underline pt-40 pr-8">
            <img class="" src={Twitter} alt="twitter" />
            <img class="mt-4" src={Github} alt="github" />
            <img class="mt-4" src={Facebook} alt="facebook" />

            {/* <a href="#">About Us</a> */}
          </h2>
        </div>
        <div className="flex text-gray-500 text-xs justify-center mt-4 mb-2">
          <p>Copyright @ Blood Bank All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
