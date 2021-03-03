import * as React from 'react';
import vectorOne from '../assets/vectorOne.svg';
import vectorTwo from '../assets/vectorTwo.svg';
import vectorThree from '../assets/vectorThree.svg';
import vectorFour from '../assets/vectorFour.svg';

const TheNumberHydra = () => {
  return (
    <div>
      <div class="absolute bottom-0 left-0 ml-44 mb-24 ">
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto -ml-8 mt-9 ">
          10 k<br />
          Life Saved
        </div>
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-3 mt-9">
          12.8 k<br />
          Requests
        </div>
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-8 mt-5">
          66%
          <br />
          Requests Done
        </div>
        <div class=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-20 mt-4 ">
          14.2 k <br />
          Donators
        </div>
      </div>

      <div class="absolute bottom-0 left-0 ">
        <img src={vectorOne} alt="images" />
      </div>
      <div class="absolute bottom-0 left-0 ">
        <img src={vectorTwo} alt="images" />
      </div>
      <div class="absolute bottom-0 left-0 ">
        <img src={vectorThree} alt="images" />
      </div>
      <div class="absolute bottom-0 left-0">
        <img src={vectorFour} alt="images" />
      </div>
    </div>
  );
};

export default TheNumberHydra;
