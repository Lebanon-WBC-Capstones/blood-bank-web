import React from 'react';
import BackPage from '../components/BackPage';
import Urgent from '../assets/Urgent-2.svg';
import Volunteer from '../assets/volunteer_1.svg';
function DonationTypePage() {
  return (
    <div>
      <BackPage title="Request Type">
        <div className="mt16 mb-5 flex flex-wrap   justify-center content-center h-full">
          <div class="mr-8">
            <button
              style={{
                backgroundColor: 'rgba(247, 244, 250, 0.98)',
              }}
              className="bg-white rounded-3xl mb-5 pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50 "
            >
              <div className="">
                <img src={Urgent} alt="Urgent" className="absolute mt-4 ml-7" />
              </div>

              <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                Urgent
              </p>
            </button>
          </div>
          <div class="ml-8">
            <button
              style={{
                backgroundColor: 'rgba(247, 244, 250, 0.98)',
              }}
              className="bg-white mb-20 rounded-3xl pl-1 pr-1 shadow-sm w-32 h-36 focus:outline-none focus:ring-2 focus:ring-pink focus:ring-opacity-50 "
            >
              <div className="mt-2 pl-5 pr-1 ">
                <img
                  src={Volunteer}
                  alt="Volunteer"
                  className="absolute mt-4 ml-3"
                />
              </div>

              <p className="text-sm font-medium bottom-0 mt-24 font-roboto text-greyfont ">
                Volunteer
              </p>
            </button>
          </div>
        </div>
      </BackPage>
    </div>
  );
}

export default DonationTypePage;
