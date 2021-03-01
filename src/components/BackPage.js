import React from 'react';
import BottomWave from '../assets/backPageBottomWave.svg';
import TopWave from '../assets/backPageTopWave.svg';
import ICBack from '../assets/ic-back.svg';
import { useHistory } from 'react-router-dom';

function BackPage(props) {
  const history = useHistory();

  return (
    <div>
      <div className="flex flex-col ">
        <div className="bg-white w-screen fixed top-0 h-auto">
          <div
            onClick={() => history.goBack()}
            className="absolute border-0 mt-10 ml-6 "
          >
            <img
              src={ICBack}
              alt="button"
              className="sm:w-full sm:h-full sm:mt-4 sm:ml-3"
            />
          </div>
          <h3 className="absolute text-md font-Roboto ml-16 mt-8 font-medium text-2xl text-red-100 sm:ml-24 sm:mt-12 sm:text-4xl">
            {props.title}
          </h3>
          <div>
            <img
              src={TopWave}
              alt="shape"
              className="w-full h-min-full sm:w-full"
            />
          </div>
        </div>

        <div className="mt-36 mb-36">{props.children}</div>

        <div className="bg-white w-screen fixed bottom-0 h-auto">
          <img
            src={BottomWave}
            alt="Bottom"
            className="w-full h-min-full sm:w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default BackPage;
