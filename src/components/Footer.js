import React from 'react';
import wave from '../assets/waves.svg';
import { Link } from 'react-router-dom';
export default function AboutFooter() {
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
          <div className=" text-lg underline">
            {' '}
            <Link to={`/aboutus`}>
              <h2>About Us</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
