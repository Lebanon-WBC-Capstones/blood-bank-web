import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import dropRequest from '../assets/dropRequest.svg';
import Back from '../assets/back.svg';
import Wave from '../assets/Wafe.svg';
//import Person from '../assets/Person.svg';
//import Send from '../assets/send.svg';
import Header from '../assets/headerRequest.svg';
import 'react-datepicker/dist/react-datepicker.css';
//import DateIcon from '../assets/date.svg';
import { useParams, useHistory } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="w-12"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};
function RequestFormPage() {
  const history = useHistory();
  const { type: typex } = useParams();
  return (
    <div>
      <div className="flex flex-col bg-pri-red h-screen">
        <div className="bg-pri-red h-screan">
          <img src={Header} alt="Header" />
        </div>
        <div className="flex flex-col -mt-16">
          <div className="text-gray-600">Request Form</div>
          <div className="text-gray-400">For {typex}</div>
        </div>
        <div className=" flex flex-col ">
          <div className="ml-4">
            <img src={Back} alt="images" onClick={() => history.goBack()} />
          </div>
          <div className="flex flex-row mt-5 ml-28 ">
            <div>
              <select
                className="text-xs	bg-pri-red	border-2 border-white	rounded-xl h-8 text-white
               h-10"
              >
                <option value="">For Me / Others</option>
                <option value="me">Me</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="relative	flex-initial ml-8 -mt-4">
              <span className=" absolute text-3xl top-2 left-3 text-white">
                A
              </span>
              <button className="absolute -right-2 rounded-full w-7 h-7 text-lg align-top leading-4	 text-white bg-gray-600		border-2	border-white	">
                +
              </button>
              <img src={dropRequest} alt="images" />
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <input
              type="text"
              id="full-name"
              name="full-name"
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto"
              placeholder="Full Name"
            />

            <input
              type="number"
              id="phone"
              name="phone"
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder="Phone"
            />

            <input
              type="text"
              id="address"
              name="address"
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder="Address"
            />

            <input
              type="text"
              id="Emergency"
              name="Emergency"
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder="Emergency"
            />

            <input
              type="text"
              id="purpose"
              name="purpose"
              className="h-24 w-3/4 rounded-lg  border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder="Purpose"
            />
            <div className="flex flex-row justify-between mt-3 ml-12 mr-6">
              <div>
                <Example />
              </div>
              <div>
                <input
                  type="number"
                  id="pints"
                  name="pints"
                  className=" w-3/4 rounded-lg h-9 border-2  border-white   "
                  placeholder="Pints Need?"
                />
              </div>
            </div>

            <div>
              <div>
                <img src={Wave} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestFormPage;
