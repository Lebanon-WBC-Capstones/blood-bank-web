import React from 'react';
import HerOne from './Images/Ellipse 45.svg';
import HeroTwo from './Images/Ellipse 50.svg';
import HeroThree from './Images/Ellipse 48.svg';
import HeroFour from './Images/Ellipse 47.svg';
import HeroFive from './Images/Ellipse 49.svg';
import HeroSix from './Images/Ellipse 46.svg';

function HeroCircles() {
  const [angle, setAngle] = React.useState(0);
  const animRef = React.useRef();
  const cont = React.useRef(null);

  const animate = (time) => {
    animRef.current = requestAnimationFrame(animate);
    setAngle((prev) => (prev <= 2 * Math.PI ? prev + 0.01 : 0.01));
  };

  React.useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
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
        className="border-solid border-2 border-gray-400"
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
          width: '12%',
          height: '12%',
          margin: '-6%',
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
  );
}

export default HeroCircles;
