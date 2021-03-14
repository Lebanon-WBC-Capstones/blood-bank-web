import React, { useState, useContext } from 'react';
import Heart from '../assets/vector_1.svg';
import Clock from '../assets/appointmentClock.svg';
import DateIcon from '../assets/date.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { withNamespaces } from 'react-i18next';
//import { Link } from 'react-router-dom';
import { firestore } from '../api/firebase.js';
import { Context } from '../Context';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DonationAppointment({ t }) {
  const [state] = useContext(Context);
  const [time, setTime] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const { location: locationx } = useParams();
  const { pints: pintsx } = useParams();
  const { type: typex } = useParams();

  const onChangeHandler = (e) => {
    setTime(e.current.value);
  };
  const handleDonate = () => {
    firestore.collection('Donation').add({
      operation: 'Donation',
      userId: state.setUser.uid,
      pints: pintsx,
      donation_type: typex + ' Request',
      location: locationx,
      date: String(new Date()),
      time: '10',
    });
  };
  return (
    <div>
      <div>
        <button onClick={handleDonate}>create donation</button>
      </div>
      <form>
        <div className="container max-w-screen-sm mt-10 sm:ml-12 sm:mt-20">
          <label className="font-Roboto text-gray-500 mr-32 sm:mr-80">
            {t('donateappointment.appointment_date')}
          </label>
          <br />
          <div className="flex flex-row justify-evenly mt-0.5">
            <div className="text-gray-400 w-3/4 h-9 pl-2 pr-20 sm:pr-72 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="d/MMM/yyyy"
                className="bg-white"
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
              {t('donateappointment.appointment_time')}
            </label>
            <br />
            <div className="flex flex-row justify-evenly mt-0.5">
              <input
                type="text"
                onChange={onChangeHandler}
                className="w-3/4 rounded-lg h-9 bg-white border-2 pt-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <img
                src={Clock}
                alt="clock"
                className="absolute pl-64 pr-5 pt-0.5 sm:pl-96 sm:ml-8"
              />
            </div>
          </div>

          <div className="ml-16 mb-8 mt-36">
            <Link to={`/donateconfirm`}>
              <button className="flex flex-row justify-evenly items-center w-3/4 rounded-lg h-9 text-md text-gray-500 font-Roboto bg-pink mt-10 mb-6 sm:pl-20 focus:outline-none focus:ring-2 focus:ring-gray-300 pl-5 sm:text-xl">
                {t('donateappointment.confirm_appointment')}
                <img src={Heart} alt="heart" className="pr-8 sm:pr-20" />
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withNamespaces()(DonationAppointment);
