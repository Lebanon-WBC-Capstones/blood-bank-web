import React from 'react';
import About from '../assets/aboutUs.svg';
function LandAboutBg(props) {
  return (
    <div className="flex relative">
      <img src={About} alt="bg" className="flex w-full relative sm:w-full" />
      {props.children}
    </div>
  );
}

export default LandAboutBg;
