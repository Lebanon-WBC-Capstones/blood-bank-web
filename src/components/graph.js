import React from 'react';
import drops from '../assets/blood-drops.svg';
import path from '../assets/whole-path.svg';
import path2 from '../assets/home-pathwout-text.svg';
export default function Graph() {
  return (
    <div>
      <div
        style={{
          display: 'inline-block',
          position: 'absolute',
          minWidth: '330px',
          paddingLeft: '2.75rem',
          paddingTop: '0.5rem',
        }}
      >
        <img style={{ marginRight: '0px' }} src={path2} alt="house" />
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '20%',
            left: '4%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class="  bg-red-300  text-xs "
        >
          Emergency Blood Request
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '38%',
            left: '1%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class=" bg-red-300  text-xs "
        >
          Donate and help others
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '57%',
            right: '0%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class=" bg-red-300 text-xs "
        >
          Flexible scheduling
        </button>
        <button
          style={{
            borderRadius: '16px',
            position: 'absolute',
            top: '70%',
            right: '3%',
            width: 'auto',
            padding: '0.5rem',
            backgroundColor: 'rgba(136, 129, 129, 0.22)',
            color: 'rgba(94, 89, 89, 0.87)',
          }}
          class=" bg-red-300 text-xs"
        >
          Fast Response
        </button>
      </div>
    </div>
  );
}
