import React from 'react';
import LandLayout from '../assets/landLayout.svg';
function LandingLayout(props) {
  return (
    <div>
      <div className="relative">
        <img
          src={LandLayout}
          alt="bg"
          className="relative flex w-screen sm:w-full"
        />
        {props.children}
      </div>
    </div>
  );
}

export default LandingLayout;
