import React from 'react';
import BloodTube from '../assets/bloodtube_xl.svg';
import Platelets from '../assets/Platelets_xl.svg';
import RedCells from '../assets/RedCells_xl.svg';
import { Link } from 'react-router-dom';

import Blood from '../assets/blood.svg';

function RequestCards() {
  return (
    <div className="flex flex-row mt-10 sm:ml-40 sm:mt-20 ">
      <div className="mb-5 flex flex-col justify-between ml-10">
        <div>
          <Link to={`/requestFormPlasma`}>
            <button
              style={{
                backgroundColor: 'rgba(247, 244, 250, 0.98)',
              }}
              className="bg-white rounded-3xl mb-5 pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50 "
            >
              <div className="mb-8 pl-5 pr-1 ">
                <img src={BloodTube} alt="tube" className="absolute" />
              </div>

              <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                Plasma
              </p>
            </button>
          </Link>
        </div>
        <div>
          <Link to={`/requestFormRed Cells`}>
            <button
              style={{
                backgroundColor: 'rgba(247, 244, 250, 0.98)',
              }}
              className="bg-white mb-20 rounded-3xl pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50 "
            >
              <div className="mt-2 pl-5 pr-1 ">
                <img src={Blood} alt="tube" className="absolute" />
              </div>

              <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                Red Cells
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex flex-col justify-between ml-12">
        <div>
          <Link to={`/requestFormPlatelets`}>
            <button
              style={{
                backgroundColor: 'rgba(247, 244, 250, 0.98)',
              }}
              className="bg-white rounded-3xl mt-16  pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50 "
            >
              <div className=" pl-10 mt-3 pr-1 ">
                <img src={Platelets} alt="tube" className="absolute" />
              </div>

              <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                Platelets
              </p>
            </button>
          </Link>
        </div>
        <div>
          <Link to={`/requestFormBlood`}>
            <button
              style={{
                backgroundColor: 'rgba(247, 244, 250, 0.98)',
              }}
              className="bg-white rounded-3xl mb-8 pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50"
            >
              <div className="mt-3 pl-7 pr-1 ">
                <img src={RedCells} alt="tube" className="absolute" />
              </div>
              <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                Blood
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RequestCards;
