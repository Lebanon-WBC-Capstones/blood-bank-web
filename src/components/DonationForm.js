import React from 'react';
import Heart from '../assets/vector_1.svg';
import Clock from '../assets/clock.svg';
import Date from '../assets/date.svg';
function DonationForm() {
  return (
    <div>
      <form>
        <div className="container max-w-screen-sm mt-5">
          <label className="font-Roboto text-gray-500 mr-32 sm:mr-80">
            Appointment date
          </label>
          <br />
          <div className="flex flex-row justify-evenly mt-0.5">
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 pt-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <img
              src={Date}
              alt="calendar"
              className="absolute pl-60 pr-1 sm:pl-96 sm:ml-6"
            />
          </div>
          <div className="mt-2">
            <label className="font-Roboto text-gray-500 mr-32 align-center sm:mr-80">
              Appointment time
            </label>
            <br />
            <div className="flex flex-row justify-evenly mt-0.5">
              <input
                type="text"
                className="w-3/4 rounded-lg h-9 border-2 pt-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <img
                src={Clock}
                alt="clock"
                className="absolute pl-64 pr-4 pt-0.5 sm:pl-96 sm:ml-8"
              />
            </div>
          </div>
          <div className="flex flex-row justify-evenly mt-16">
            <button className="flex flex-row justify-evenly items-center w-3/4 rounded-lg h-9 text-md text-gray-500 font-Roboto bg-pink mt-10 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-300 pl-5 sm:text-xl">
              Confirm Appointment
              <img src={Heart} alt="heart" className="pr-8" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DonationForm;
