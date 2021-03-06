import React from 'react';
import path1 from '../assets/contactFormArm1.svg';
import path2 from '../assets/contactFormArm2.svg';
import path3 from '../assets/contactFormArm3.svg';
import { withNamespaces } from 'react-i18next';
import send from '../assets/ic-send.svg';

function ContactUs({ t }) {
  return (
    <div>
      <div>
        <div className="text-gray-500 text-2xl font-bold	mt-4">
          {t('aboutus.contact_us')}
        </div>
        <div className="text-gray-500 mt-4 pl-12">We Appreciate</div>
        <div className="text-gray-500  pl-32">Your Feedback</div>
      </div>
      <div></div>
      <div className="z-10 grid justify-items-start absolute -bottom-80 left-24 mb-6 w-8/12  mb-2">
        <input
          className="bg-pink rounded-md pl-4 leading-8	 text-xs text-gray-500 font-Robot w-full	"
          placeholder="Enter Your Name"
        />

        <input
          className="bg-pink rounded-md pl-4 leading-8 mt-6	 text-xs text-gray-500 font-Robot w-full	"
          placeholder="E-mail"
        />
        <textarea
          className="bg-pink rounded-md pl-4 leading-8 mt-6	h-24 text-xs text-gray-500 font-Robot w-full	"
          placeholder="Enter Your Message..."
        ></textarea>
        <br />
        <div className="w-full flex justify-end">
          <button className="text-gray-500 justify-center flex leadind-4 bg-pink rounded-md w-28 items-center	">
            {t('aboutus.send')}
            <img className="ml-2" src={send} alt="images" />
          </button>
        </div>
      </div>

      <div className="absolute -bottom-80 left-0 z-0	">
        <img src={path1} alt="images" />
      </div>
      <div className="absolute -bottom-80 left-0 z-0	">
        <img src={path2} alt="images" />
      </div>
      <div className="absolute -bottom-80 left-0 z-0	">
        <img src={path3} alt="images" />
      </div>
    </div>
  );
}

export default withNamespaces()(ContactUs);
