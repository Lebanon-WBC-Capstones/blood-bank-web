import React from 'react';
import dropRequest from '../assets/dropRequest.svg';
import Back from '../assets/back.svg';
import Wave from '../assets/Wafe.svg';
import Person from '../assets/Person.svg';
import Send from '../assets/send.svg';
function requestDonation() {
  return (
    <div class="h-screen w-full pt-24" style={{ backgroundColor: '#F26868' }}>
      <div
        class="rounded-full h-52  -top-28 -left-8 -right-8 pt-32	 absolute  bg-white"
        style={{ backgroundColor: 'white' }}
      >
        <div class="text-gray-500 text-2xl">Request Form</div>
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
        <div class="justify-items-start">
          <img src={dropRequest} alt="images" />
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
          class="grid grid-cols-2 items-center mt-4 w-9/12"
          style={{ marginLeft: '12.5%', marginRight: '12.5%' }}
        >
          <div class="flex justify-center">
            <div class="rounded-full bg-white w-8 h-8">don</div>
          </div>
          <div class="flex justify-center item-center">
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
