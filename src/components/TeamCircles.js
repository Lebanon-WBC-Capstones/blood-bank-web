import React, { useEffect } from 'react';
import Jolie from '../assets/jolie_H.png';
import Nabigha from '../assets/nabigha_M.png';
import Layla from '../assets/layla_H.png';
import Jana from '../assets/jana_Z.png';
import Mohamad from '../assets/mohamad_T.png';
import Abdulrahman from '../assets/abdulrahman.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
function TeamCircles() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  const names = ['Jana', 'Layla', 'Nabigha', 'Mohamad', 'Jolie', 'Abdulrahman'];
  return (
    <div>
      <div
        className="rounded-full bg-none border-2 border-gray-300 flex items-center justify-center mt-20"
        style={{ height: '390px', width: '380px' }}
      >
        <div data-aos="zoom-in" className="mb-64   absolute ">
          <img src={Layla} alt="hero" />
          <p className="absolute ml-4 font-medium mt-2 text-sm text-grey">
            {names[1]}
          </p>
        </div>
        <div data-aos="fade-down-right" className="absolute mb-96 mr-64 mt-20">
          <img src={Jana} alt="hero" />
        </div>
        <p
          className="absolute mr-60 mt-24 text-sm font-medium text-grey"
          style={{ marginBottom: '19rem' }}
        >
          {names[0]}
        </p>

        <div data-aos="fade-up-right" className=" absolute mt-80 mr-44">
          <img src={Nabigha} alt="hero" />
        </div>
        <p
          className="absolute mr-40 text-sm font-medium  text-grey"
          style={{ marginTop: '27rem' }}
        >
          {names[2]}
        </p>

        <div data-aos="fade-right" className=" absolute mt-12 mr-64">
          <img src={Mohamad} alt="hero" />
        </div>
        <p className="absolute mr-36 font-medium mt-32 text-sm  text-grey">
          {names[3]}
        </p>
        <div data-aos="fade-left" className=" absolute mt-20 ml-64">
          <img src={Jolie} alt="hero" />
        </div>
        <p className="absolute ml-72 mt-44 text-sm font-medium text-grey">
          {names[4]}
        </p>
        <div
          data-aos="fade-up-left"
          className="absolute ml-48"
          style={{ marginTop: '22rem' }}
        >
          <img src={Abdulrahman} alt="hero" />
        </div>
        <p
          className="absolute text-sm ml-60 mb-16 font-medium text-grey"
          style={{ marginTop: '32rem' }}
        >
          {names[5]}
        </p>
        <div
          className="rounded-full bg-none border-2 border-solid border-gray-300 flex items-center justify-center "
          style={{ height: '270px', width: '270px' }}
        ></div>
      </div>
    </div>
  );
}

export default TeamCircles;
