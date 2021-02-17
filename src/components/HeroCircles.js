import React from 'react';
import HerOne from './Images/Ellipse 45.svg';
import HeroTwo from './Images/Ellipse 50.svg';
import HeroThree from './Images/Ellipse 48.svg';
import HeroFour from './Images/Ellipse 47.svg';
import HeroFive from './Images/Ellipse 49.svg';
import HeroSix from './Images/Ellipse 46.svg';

function HeroCircles() {
  const names = ['kristin', 'Mark', 'Tina', 'Marco', 'jenny', 'Luna'];
  return (
    <div>
      <div
        className="rounded-full bg-none border-2 border-solid border-gray-300 flex items-center justify-center mt-16"
        style={{ height: '440px', width: '430px' }}
      >
        <div className="mb-64 mr-44 ml-16 absolute ">
          <img src={HerOne} alt="hero" className="animate-bounce" />
          <p className="absolute ml-6 mt-2 text-sm text-grey">{names[1]}</p>
        </div>
        <div className="absolute mb-96 mr-60 mt-12">
          <img src={HeroTwo} alt="hero" className="animate-bounce" />
        </div>
        <p
          className="absolute mr-64 mt-16 text-sm  text-grey"
          style={{ marginBottom: '22rem' }}
        >
          {names[0]}
        </p>
        <div className=" absolute mb-28 ml-20" style={{}}>
          <img src={HeroThree} alt="hero" className="animate-bounce" />
        </div>
        <p className="absolute ml-24 mb-24 text-sm  text-grey">{names[2]}</p>
        <div class=" absolute mt-36 mr-48">
          <img src={HeroFour} alt="hero" className="animate-bounce" />
        </div>
        <p className="absolute mr-40 mt-48 text-sm  text-grey">{names[3]}</p>
        <div className=" absolute mt-48 ml-60">
          <img src={HeroFive} alt="hero" className="animate-bounce" />
        </div>
        <p className="absolute ml-52 mt-60 text-sm  text-grey">{names[4]}</p>
        <div className="absolute " style={{ marginTop: '32rem' }}>
          <img src={HeroSix} alt="hero" className="animate-bounce" />
        </div>
        <p
          className="absolute text-sm  text-grey"
          style={{ marginTop: '36rem' }}
        >
          {names[5]}
        </p>
        <div
          className="rounded-full bg-none border-2 border-solid border-gray-300 flex items-center justify-center "
          style={{ height: '280px', width: '270px' }}
        >
          <div
            className="rounded-full bg-none border-2 border-solid border-gray-300 flex items-center justify-center"
            style={{ height: '73px', width: '70px' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroCircles;
