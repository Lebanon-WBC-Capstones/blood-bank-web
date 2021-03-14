import React, { useEffect } from 'react';
import AboutLayout from '../components/AboutLayout';
import AboutGraph from '../components/AboutGraph';
import TeamCircles from '../components/TeamCircles';
import ContactUs from '../components/ContactUs';
import AboutFooter from '../components/AboutFooter';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
function AboutUsPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="overflow-hidden" style={{ left: '0vw', right: '0vw' }}>
      <AboutLayout>
        <Link to={`/`}>
          <div
            className="absolute text-sm ml-80 text-gray-500 font-medium "
            style={{ top: '3vw' }}
          >
            Home
          </div>
        </Link>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="absolute font-Roboto text-3xl font-bold"
          style={{ top: '30vw', left: '14vw' }}
        >
          <span className="text-red mr-16 mb-2">About</span>
          <br />
          <span className="font-Roboto text-3xl mt-8 ml-5 font-bold text-grey">
            Our Services
          </span>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="absolute"
          style={{ top: '67vw', left: '3vw' }}
        >
          <AboutGraph />
        </div>
        <div
          className="absolute text-white text-2xl font-medium"
          style={{ top: '190vw', left: '65vw' }}
        >
          OUR TEAM
        </div>
        <div
          data-aos="zoom-in-down"
          className="absolute "
          style={{ top: '190vw', right: '0' }}
        >
          <TeamCircles />
        </div>
        <div
          className="absolute "
          style={{ top: '369vw', right: '0', left: '0' }}
        >
          <ContactUs />
        </div>
        <div
          className="absolute "
          style={{ top: '472vw', right: '0', left: '0' }}
        >
          <AboutFooter />
        </div>
      </AboutLayout>
    </div>
  );
}

export default AboutUsPage;
