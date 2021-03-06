import React from 'react';
import BottomWave from '../assets/backBottomWave.svg';
import TopWave from '../assets/backTopWave.svg';
import ICBack from '../assets/ic-back.svg';
import { useHistory } from 'react-router-dom';

function BackPage(props) {
  const history = useHistory();

  return (
    <div>
      <div className="flex flex-col bg-white h-screen">
        <div className=" flex-initial">
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

        <div className="flex-auto overflow-auto mb-5">{props.children}</div>

        <div className="flex-initial">
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
