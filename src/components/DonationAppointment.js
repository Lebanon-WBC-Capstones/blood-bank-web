import React, { useState } from 'react';
import Heart from '../assets/vector_1.svg';
import Clock from '../assets/appointmentClock.svg';
import DateIcon from '../assets/date.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import { Link } from 'react-router-dom';

function DonationAppointment() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <form>
        <div className="container max-w-screen-sm mt-10 sm:ml-12 sm:mt-20">
          <label className="font-Roboto text-gray-500 mr-32 sm:mr-80">
            Appointment date
          </label>
          <br />
          <div className="flex flex-row justify-evenly mt-0.5">
            <div className="text-gray-400 h-9 pl-2 pr-20 sm:pr-72 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="d/MMM/yyyy"
              />
            </div>
            <div className="absolute pr-2 pl-12 pb-32 sm:pr-6">
              <img
                src={DateIcon}
                alt="calendar"
                className=" pl-48 pb-96 sm:pl-96 sm:ml-6"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="font-Roboto text-gray-500 mr-32 align-center sm:mr-80">
              Appointment time
            </label>
            <br />
            <div className="flex flex-row justify-evenly mt-0.5">
              <input
                type="text"
                className="w-3/4  bg-white rounded-lg h-9 border-2 pt-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <img
                src={Clock}
                alt="clock"
                className="absolute pl-64 pr-5 pt-0.5 sm:pl-96 sm:ml-8"
              />
            </div>
          </div>

          <div className="flex flex-row justify-evenly mb-8 mt-36">
            <button className="flex flex-row justify-evenly items-center w-3/4 rounded-lg h-9 text-md text-gray-500 font-Roboto bg-pink mt-10 mb-6 sm:pl-20 focus:outline-none focus:ring-2 focus:ring-gray-300 pl-5 sm:text-xl">
              Confirm Appointment
              <img src={Heart} alt="heart" className="pr-8 sm:pr-20" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DonationAppointment;
