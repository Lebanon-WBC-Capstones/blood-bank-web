import React from 'react';
import LandAboutBg from '../components/LandAboutBg';
import HeroCircles from '../components/HeroesCircles';
import ContactUs from '../components/ContactUs';

function AboutUsPage() {
  return (
    <div>
      <div className="w-full sm:w-full ">
        <LandAboutBg>
          <div className="absolute ml-32 mt-32">
            <span className="font-Roboto">About</span>
            <br />
            <span className="font-Roboto"> Our Services</span>
          </div>
        </LandAboutBg>
      </div>
    </div>
  );
}

export default AboutUsPage;
