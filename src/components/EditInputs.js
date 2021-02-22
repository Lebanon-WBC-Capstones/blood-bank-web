import React from 'react';
import BloodDrop from './BloodDrop.js';
function EditInputs() {
  return (
    <div>
      <div className="flex flex-col mt-12 sm:mt-20">
        <form>
          <div className="sm:mt-2">
            <label className="font-Roboto text-gray-500 mr-48 sm:mr-96 sm:text-xl">
              FullName
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 pt-3 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2 sm:mt-3">
            <label className="font-Roboto text-gray-500 mr-52 sm:mr-96 sm:text-xl">
              Address
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2 sm:mt-3">
            <label className="font-Roboto text-gray-500 mr-40 sm:mr-80 sm:text-xl">
              New password
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2 sm:mt-3">
            <label className="font-Roboto text-gray-500 mr-36 sm:mr-72 sm:text-xl">
              Confirm password
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <BloodDrop bloodtype="A+" />
          <input
            type="submit"
            value="Save Changes"
            className="w-3/4 rounded-lg h-9 text-gray-500 font-Roboto bg-pink mt-10 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:text-xl"
          />
        </form>
      </div>
    </div>
  );
}

export default EditInputs;
