import React, { useState } from 'react';
import BloodDrop from '../components/BloodDrop';
import { withNamespaces } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Back from '../assets/back.svg';

function EditInputs({ t }) {
  const history = useHistory();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [bloodType, setBloodType] = useState('');

  const handleBloodType = (e) => {
    setBloodType(e.target.value);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'fullName') {
      setFullName(value);
    } else {
      setAddress(value);
    }
  };

  const handleEdit = (event) => {
    event.preventDefault();
    history.push(`/dashboard/${fullName}/${address}/${bloodType}`);
  };

  return (
    <div>
      <div className="w-8 -mt-40 ml-5">
        <img src={Back} alt="images" onClick={() => history.goBack()} />
      </div>
      <div className="flex flex-col mt-44 sm:mt-20">
        <form onSubmit={handleEdit} autocomplete="off">
          <div className="sm:mt-2">
            <label className="font-Roboto text-gray-500 mr-48 sm:mr-96 sm:text-xl">
              {t('editprofile.full_name')}
            </label>
            <br />
            <input
              required
              type="text"
              name="fullName"
              value={fullName}
              onChange={onChangeHandler}
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2 sm:mt-3">
            <label className="font-Roboto text-gray-500 mr-52 sm:mr-96 sm:text-xl">
              {t('editprofile.address')}
            </label>
            <br />
            <input
              required
              type="text"
              name="address"
              value={address}
              onChange={onChangeHandler}
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
          <div className="mt-2 sm:mt-3">
            <label className="font-Roboto text-gray-500 mr-48 sm:mr-80 sm:text-xl">
              {t('editprofile.blood_type')}
            </label>
            <br />
            <select
              required
              onChange={handleBloodType}
              className="text-gray-500 w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <option value=""></option>
              <optgroup label="AB">
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </optgroup>
              <optgroup label="A">
                <option value="A+">A+</option>
                <option value="A-">A-</option>
              </optgroup>
              <optgroup label="O">
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </optgroup>
              <optgroup label="B">
                <option value="B+">B+</option>
                <option value="B-">B-</option>
              </optgroup>
            </select>
          </div>
          {/* <div className="mt-2 sm:mt-3">
            <label className="font-Roboto text-gray-500 mr-36 sm:mr-72 sm:text-xl">
              {t('editprofile.save_changes')}
            </label>
            <br />
            <input
              type="text"
              className="w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
  </div>*/}
          <BloodDrop bloodtype={bloodType} />

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

export default withNamespaces()(EditInputs);
