import React from 'react';
import wave from '../assets/waves.svg';

const Footer = () => {
  return (
    <footer className="text-white text-left">
      <div
        className="flex text-base pt-6 w-auto h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${wave})` }}
      >
        <div className="flex-auto pt-40 pl-2">
          <h2>Hospitals</h2>
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
              >
                Mazloum
              </a>
            </li>
            <li>
              <a href="https://www.hopitalhaykel.com/" target="_blank">
                Haykal
              </a>
            </li>
            <li>
              <a
                href="https://moph.gov.lb/en/HealthFacilities/view/3/188/74169/al-mounla-hospital/?facility_type=8"
                target="_blank"
              >
                Monla
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-auto pt-40 pl-8 ">
          <h2>Terms Us</h2>
          <ul className="text-xs underline">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and agreement</a>
            </li>
          </ul>

          <p className="text-gray-500 pt-11  text-xs pb-3 ">
            copyright @ Blood Bank All rights reserved
          </p>
        </div>
        <div className="flex-auto">
          <h2 className="text-lg underline pt-40 pr-">
            <a href="#">About Us</a>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
