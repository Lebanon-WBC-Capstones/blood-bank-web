import React from 'react';
import AboutLayout from '../components/AboutLayout';
import TeamCircles from '../components/TeamCircles';
import ContactUs from '../components/ContactUs';

function AboutUsPage() {
  return (
    <div>
      <div className="w-full sm:w-full ">
        <AboutLayout>
          <div className="absolute ml-12 mt-32">
            <span className="font-Roboto text-3xl font-bold text-red">
              About
            </span>
            <br />
            <span className="font-Roboto text-3xl mt-8 ml-5 font-bold text-grey">
              Our Services
            </span>
          </div>
          <div className="absolute mt-72 ml-28 transform rotate-1">
            <div className="absolute px-2 rounded-2xl bg-light-pink text-xl text-red font-Roboto font-bold">
              Save <br /> A Life
            </div>
          </div>
        </AboutLayout>
      </div>
    </div>
  );
}

export default AboutUsPage;
