import React from 'react';
import BG from './assets/BG.svg';
import Avatar from './assets/avter.svg';
import Icon from './assets/Camera.svg';
import BloodDrop from './assets/Vector (3).svg';

function EditPage() {
  const handleEdit = () => {};
  return (
    <div className="min-h-screen bg-white flex flex-col max-w-screen-sm ">
      <img
        src={Avatar}
        alt="profile"
        className="absolute mt-36 ml-32 sm:mt-72 sm:ml-56 sm:h-1/4 sm:w-1/4 sm:max-w-screen-sm"
      />
      <img
        src={Icon}
        alt="camera"
        className="absolute mt-56 ml-52 sm:mt-80 sm:ml-96 sm:h-12 sm:w-12"
        onClick={handleEdit}
      />

      <img src={BG} alt="editBg" className=" sm:w-full" />

      <div className="flex flex-col mt-12 sm:mt-20">
        <form>
          <div className="">
            <label className="font-Roboto text-gray-500 mr-48 sm:mr-96">
              FullName
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 pt-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2">
            <label className="font-Roboto text-gray-500 mr-52 sm:mr-96">
              Address
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2">
            <label className="font-Roboto text-gray-500 mr-40 sm:mr-80">
              New password
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2">
            <label className="font-Roboto text-gray-500 mr-36 sm:mr-80">
              Confirm password
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label className="font-Roboto text-gray-500 pl-4 pr-10">
              Blood Type:
            </label>
            <select
              name="BloodTypes"
              className="w-2/5 rounded-lg h-9 border-2 text-gray-500 mt-5 mr-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <optgroup label="A">
                <option value="A+">A+</option>
                <option value="A-">A-</option>
              </optgroup>
              <optgroup label="AB">
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </optgroup>
              <optgroup label="B">
                <option value="B+">B+</option>
                <option value="B-">B-</option>
              </optgroup>
              <optgroup label="O">
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </optgroup>
            </select>
          </div>
          <div className="flex flex-row justify-evenly mt-12">
            <img src={BloodDrop} alt="BloodDrop" className="" />
            <img src={BloodDrop} alt="BloodDrop" className="animate-pulse" />
            <img src={BloodDrop} alt="BloodDrop" className="" />
          </div>
          <input
            type="submit"
            value="Save Changes"
            className="w-3/4 rounded-lg h-9 text-gray-500 font-Roboto bg-pink mt-12 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </form>
      </div>
    </div>
  );
}

export default EditPage;
