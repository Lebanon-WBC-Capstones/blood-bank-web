import * as React from 'react';
import vectorOne from '../assets/vectorOne.svg';
import vectorTwo from '../assets/vectorTwo.svg';
import vectorThree from '../assets/vectorThree.svg';
import vectorFour from '../assets/vectorFour.svg';

const TheNumberHydra = () => {
  return (
    <div class="flex flex-col">
      <div style={{ marginTop: '90%', marginLeft: '180px' }}>
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto -ml-9 mt-9 ">
          10 k<br />
          Life Saved
        </div>
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-2 mt-9">
          12.8 k<br />
          Requests
        </div>
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-7 mt-5">
          66%
          <br />
          Requests Done
        </div>
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-20 mt-4 ">
          14.2 k <br />
          Donators
        </div>
      </div>
      <div>
        <div class="absolute bottom-0 left-0 md:flex-shrink-0">
          <img src={vectorOne} alt="images" class="md:w-48" />
        </div>
        <div class="absolute bottom-0 left-0 md:flex-shrink-0">
          <img src={vectorTwo} alt="images" class="md:w-48" />
        </div>
        <div class="absolute bottom-0 left-0 md:flex-shrink-0">
          <img src={vectorThree} alt="images" class="md:w-48" />
        </div>
        <div class="absolute bottom-0 left-0 md:flex-shrink-0">
          <img src={vectorFour} alt="images" class="md:w-48" />
        </div>
      </div>
    </div>
  );
};

export default TheNumberHydra;
