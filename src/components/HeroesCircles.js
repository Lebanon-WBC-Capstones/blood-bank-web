import React, { useCallback } from 'react';
import HeroOne from '../assets/hero_1.png';
import HeroTwo from '../assets/hero_2.png';
import HeroThree from '../assets/hero_3.png';
import HeroFour from '../assets/hero_4.png';
import HeroFive from '../assets/hero_5.png';
import HeroSix from '../assets/hero_6.png';

function HeroCircles() {
  const [angle, setAngle] = React.useState(0);
  const animRef = React.useRef();
  const cont = React.useRef(null);

  const animate = useCallback((time) => {
    animRef.current = requestAnimationFrame(animate);
    setAngle((prev) => (prev <= 2 * Math.PI ? prev + 0.005 : 0.005));
  }, []);

  React.useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [animate]);
  return (
    <div className="sm:flex items-center justify-center mt-16">
      <div
        ref={cont}
        style={{ position: 'relative', width: '400px', height: '400px' }}
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
            width: '30%',
            height: '30%',
            marginRight: '10%',
            //top: 200 + 200 * Math.sin(angle + 0.75),
            //left: 200 + 200 * Math.cos(angle + 0.75),
          }}
        />

        <img
          src={HeroOne}
          alt="hero"
          style={{
            position: 'absolute',
            display: 'block',
            width: '25%',
            height: '25%',
            margin: '-12.5%',
            top: 200 + 139 * Math.sin(angle + 3),
            left: 200 + 139 * Math.cos(angle + 3),
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
            top: 200 + 51 * Math.sin(angle + 1),
            left: 200 + 51 * Math.cos(angle + 1),
          }}
        />

        <img
          src={HeroFive}
          alt="hero"
          data-aos="fade-up-right"
          style={{
            position: 'absolute',
            display: 'block',
            width: '30%',
            height: '30%',
            marginTop: '73%',
            marginRight: '5%',
            // top: 215 + 215 * Math.sin(angle + 2.5),
            //left: 215 + 215 * Math.cos(angle + 2.5),
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
            margin: '-13%',
            top: 200 + 139 * Math.sin(angle - 0.5),
            left: 200 + 139 * Math.cos(angle - 0.5),
          }}
        />

        <img
          src={HeroSix}
          alt="hero"
          data-aos="fade-up-left"
          style={{
            position: 'absolute',
            display: 'block',
            width: '30%',
            height: '30%',
            marginTop: '80%',
            marginLeft: '65%',
            //top: 215 + 215 * Math.sin(angle + 5),
            //left: 215 + 215 * Math.cos(angle + 5),
          }}
        />
      </div>
    </div>
  );
}

export default HeroCircles;
