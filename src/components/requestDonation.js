import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import dropRequest from '../assets/dropRequest.svg';
import Back from '../assets/back.svg';
import Wave from '../assets/Wafe.svg';
import Person from '../assets/Person.svg';
import Send from '../assets/send.svg';
import 'react-datepicker/dist/react-datepicker.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      class="w-12"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};
function requestDonation() {
  return (
    <div class="h-screen w-full pt-24" style={{ backgroundColor: '#F26868' }}>
      <div
        class="rounded-full h-52  -top-28 -left-8 -right-8 pt-32	 absolute  bg-white"
        style={{ backgroundColor: 'white' }}
      >
        <div class="heading text-gray-500 text-2xl">Request Form</div>
        <div class="text-gray-500">For Red Cells</div>
      </div>
      <div class="ml-4">
        <img src={Back} alt="images" />
      </div>
      <div class="grid grid-cols-2 items-center mt-4">
        <div class="justify-end	">
          <select class="text-xs	bg-transparent	border-2 border-white	rounded-md h-8	 text-white">
            <option value="" disabled selected hidden>
              For Me/ Other
            </option>

            <option value="forme">For mE</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="flex justify-items-start">
          <div class="relative	 flex-initial">
            <span class=" absolute text-3xl top-2 left-3 text-white">A</span>
            <button class="absolute -right-2 rounded-full w-7 h-7 text-lg align-top leading-4	 text-white bg-gray-600		border-2	border-white	">
              +
            </button>
            <img src={dropRequest} alt="images" />
          </div>
        </div>
      </div>
      <form class="mt-3">
        <input
          class="rounded-lg mt-3 pl-4 leading-10	text-xs text-gray-500 font-Robot w-9/12"
          placeholder="FullName"
        />
        <input
          class="rounded-lg mt-4 pl-4 leading-10	text-xs text-gray-500 font-Robot w-9/12"
          placeholder="Phone"
        />
        <input
          class="rounded-lg mt-3 pl-4 leading-10	text-xs text-gray-500 font-Robot w-9/12"
          placeholder="Address"
        />
        <input
          class="rounded-lg mt-3 pl-4 leading-10	text-xs text-gray-500 font-Robot w-9/12"
          placeholder="Emergncy"
        />
        <div
          class="grid grid-cols-2 items-center mt-4 w-full"
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
          <div class="flex justify-start">
            <div class=" flex-1 w-2/4">
              <Example />
            </div>
          </div>
          <div class="flex-initial justify-center item-right">
            <input
              class="rounded-lg pl-4 leading-10	text-xs text-gray-500 font-Robot"
              placeholder="Pints need?"
              type="number"
            />
          </div>
        </div>
      </form>
      <div>
        <img class="absolute -bottom-20" src={Wave} alt="" />
        <div class="flex mt-4">
          <img class="flex-initial mt-4 ml-4" src={Person} alt="" />
          <button
            class="flex-initial flex items-center justify-center mt-20 ml-10 bg-white w-24 rounded-xl	h-10"
            type="submit"
          >
            <div class="flex-initial ">Send</div>
            <img class=" ml-4 flex-initial" src={Send} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default requestDonation;
