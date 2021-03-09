import React from 'react';
import line from '../assets/AboutPath.svg';
import Save from '../assets/SaveLife.svg';

function AboutGraph() {
  return (
    <div>
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          minWidth: '330px',
          paddingLeft: '0.75rem',
          paddingTop: '0.5rem',
        }}
      >
        <img src={line} alt="path" className="mr-0 ml-20" />
        <button
          className=" bg-red-300 font-normal text-xs "
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '33%',
            left: '75%',
            width: '27%',
            padding: '0.2rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
        >
          Register
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '50%',
            right: '43%',
            width: '29%',
            padding: '0.3rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          className=" bg-red-300 text-xs "
        >
          Post a request
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '69%',
            right: '14%',
            width: '28%',
            padding: '0.2rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          className=" bg-red-300 text-xs"
        >
          Get notified
        </button>
        <button
          style={{
            backgroundColor: 'rgba(254, 254, 254, 0.83)',
            borderRadius: '10px',
            position: 'absolute',
            left: '15%',
            top: '90%',
          }}
        >
          <img src={Save} alt="save" />
        </button>
      </div>
    </div>
  );
}

export default AboutGraph;
