import React from 'react';

function RequestCards() {
  return (
    <div className="flex flex-row">
      <div className="mb-5 flex flex-col justify-between ml-10">
        <div>
          <button
            style={{
              backgroundColor: 'rgba(247, 244, 250, 0.98)',
            }}
            className="bg-white rounded-3xl mb-5 pl-1 pr-1 shadow-sm w-36 h-40 "
          >
            <div className="pt-1 pl-2 pr-1 "></div>

            <p className="text-md self-center font-roboto text-greyfont ">
              Plasma
            </p>
          </button>
        </div>
        <div>
          <button
            style={{
              backgroundColor: 'rgba(247, 244, 250, 0.98)',
            }}
            className="bg-white  rounded-3xl pl-1 pr-1 shadow-sm w-36 h-40 "
          >
            <div className="pt-1 pl-2 pr-1 "></div>

            <p className="text-md self-center font-roboto text-greyfont ">
              Red Cells
            </p>
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-between ml-12">
        <div>
          <button
            style={{
              backgroundColor: 'rgba(247, 244, 250, 0.98)',
            }}
            className="bg-white rounded-3xl  pl-1 pr-1 shadow-sm w-36 h-40 "
          >
            <div className="pt-1 pl-2 pr-1 "></div>

            <p className="text-md self-center font-roboto text-greyfont ">
              Platelets
            </p>
          </button>
        </div>
        <div>
          <button
            style={{
              backgroundColor: 'rgba(247, 244, 250, 0.98)',
            }}
            className="bg-white rounded-3xl pl-1 pr-1 shadow-sm w-36 h-40 "
          >
            <div className="pt-1 pl-2 pr-1 "></div>

            <p className="text-md self-center font-roboto text-greyfont ">
              Blood Cells
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestCards;
