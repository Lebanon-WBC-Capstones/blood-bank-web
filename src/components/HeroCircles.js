import React from 'react';
import HerOne from './Images/Component 5.svg';
import HeroTwo from './Images/Component 1 (1).svg';
import HeroThree from './Images/Component 6.svg';
import HeroFour from './Images/Component 4.svg';
import HeroFive from './Images/Component 3.svg';
import HeroSix from './Images/Component 2.svg';

function HeroCircles() {
  const [angle, setAngle] = React.useState(0);
  const animRef = React.useRef();
  const cont = React.useRef(null);

  const animate = (time) => {
    animRef.current = requestAnimationFrame(animate);
    setAngle((prev) => (prev <= 2 * Math.PI ? prev + 0.005 : 0.005));
  };

  React.useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="sm:flex items-center justify-center mt-16">
      <div
        ref={cont}
        style={{ position: 'relative', width: '430px', height: '430px' }}
      >
        <div
          className="border-solid border-2 border-gray-400"
          style={{
            borderRadius: '50%',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
        <div
          className="border-solid border-2 border-gray-400"
          style={{
            borderRadius: '50%',
            width: '60%',
            height: '60%',
            position: 'absolute',
            top: '20%',
            left: '20%',
          }}
        />

        <div
          className="border-solid border-2 border-gray-300"
          style={{
            borderRadius: '50%',
            width: '25%',
            height: '25%',
            position: 'absolute',
            top: '37%',
            left: '38%',
          }}
        />

        <img
          src={HeroTwo}
          alt="hero"
          style={{
            position: 'absolute',
            display: 'block',
            width: '25%',
            height: '25%',
            margin: '-12.5%',
            top: 215 + 215 * Math.sin(angle + 0.75),
            left: 215 + 215 * Math.cos(angle + 0.75),
          }}
        />

        <img
          src={HerOne}
          alt="hero"
          style={{
            position: 'absolute',
            display: 'block',
            width: '25%',
            height: '25%',
            margin: '-12,5%',
            top: 215 + 150 * Math.sin(angle + 3.5),
            left: 215 + 150 * Math.cos(angle + 3.5),
          }}
        />
        <img
          src={HeroThree}
          alt="hero"
          style={{
            position: 'absolute',
            display: 'block',
            width: '25%',
            height: '25%',
            margin: '-10%',
            top: 215 + 55 * Math.sin(angle + 1),
            left: 215 + 55 * Math.cos(angle + 1),
          }}
        />

        <img
          src={HeroFive}
          alt="hero"
          style={{
            position: 'absolute',
            display: 'block',
            width: '30%',
            height: '30%',
            margin: '-15%',
            top: 215 + 215 * Math.sin(angle + 2.5),
            left: 215 + 215 * Math.cos(angle + 2.5),
          }}
        />

        <img
          src={HeroFour}
          alt="hero"
          style={{
            position: 'absolute',
            display: 'block',
            width: '27%',
            height: '27%',
            margin: '-14%',
            top: 215 + 150 * Math.sin(angle - 0.5),
            left: 215 + 150 * Math.cos(angle - 0.5),
          }}
        />

        <img
          src={HeroSix}
          alt="hero"
          style={{
            position: 'absolute',
            display: 'block',
            width: '30%',
            height: '30%',
            margin: '-15%',
            top: 215 + 215 * Math.sin(angle + 5),
            left: 215 + 215 * Math.cos(angle + 5),
          }}
        />
      </div>
    </div>
  );
}

export default HeroCircles;
