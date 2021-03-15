import * as React from 'react';
import vectorOne from '../assets/vectorOne.svg';
import vectorTwo from '../assets/vectorTwo.svg';
import vectorThree from '../assets/vectorThree.svg';
import vectorFour from '../assets/vectorFour.svg';
import { withNamespaces } from 'react-i18next';
const TheNumberHydra = ({ t }) => {
  return (
    <div>
      <div className="absolute bottom-0 left-0 ml-44 mb-24 ">
        <div className=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto -ml-8 mt-7 flex justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center pt-1">
              <p>10 K</p>
            </div>
            <div className="flex justify-center pb-1">
              <p>{t('landingpage.life_saved')}</p>
            </div>
          </div>
        </div>
        <div className=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-2 mt-7">
          <div className="flex flex-col">
            <div className="flex justify-center pt-1">
              <p>12.8 K</p>
            </div>
            <div className="flex justify-center pb-1">
              <p>{t('landingpage.requests')}</p>
            </div>
          </div>
        </div>
        <div className=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-8 mt-4">
          <div className="flex flex-col ">
            <div className="flex justify-center pt-1">
              <p>66%</p>
            </div>
            <div className="flex justify-center pb-1">
              <p>{t('landingpage.requests_done')}</p>
            </div>
          </div>
        </div>
        <div className=" bg-pink w-24 rounded-xl h-auto text-xs text-gray-500 font-Roboto ml-20 mt-2">
          <div className="flex flex-col">
            <div className="flex justify-center pt-1">
              <p>14.2 K</p>
            </div>
            <div className="flex justify-center pb-1">
              <p>{t('landingpage.donators')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 ">
        <img src={vectorOne} alt="images" />
      </div>
      <div className="absolute bottom-0 left-0 ">
        <img src={vectorTwo} alt="images" />
      </div>
      <div className="absolute bottom-0 left-0 ">
        <img src={vectorThree} alt="images" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={vectorFour} alt="images" />
      </div>
    </div>
  );
};

export default withNamespaces()(TheNumberHydra);
