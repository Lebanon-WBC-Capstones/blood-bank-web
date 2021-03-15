import React, { useState, useContext } from 'react';
import Back from '../assets/back.svg';
import Wave from '../assets/BottomRequest.svg';
import Send from '../assets/send.svg';
import Header from '../assets/headerRequest.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, useHistory } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { firestore } from '../api/firebase.js';
import { Context } from '../Context';

function RequestFormPage({ t }) {
  const history = useHistory();
  const [state] = useContext(Context);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState(0);
  const [purpose, setPurpose] = useState('');
  const [emergency, setEmergency] = useState('');
  const [pints, setPints] = useState(0);
  const [needed, setNeeded] = useState('');
  const [coord, setCoord] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const { type: typex } = useParams();
  const [bloodType, setBloodType] = useState('');

  const handleBloodType = (e) => {
    setBloodType(e.target.value);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'fullName') {
      setFullName(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'purpose') {
      setPurpose(value);
    } else {
      setPints(value);
    }
  };

  const handleStatus = (e) => {
    setNeeded(e.target.value);
  };

  const handleLocation = (e) => {
    setCoord(e.target.value);
    setHospitalName(e.currentTarget.text);

    if (e.target.value === 'Monla') {
      setCoord('[35.8299404017442,34.4410152322184]');
      setHospitalName(e.target.value);
    } else if (e.target.value === 'Islamic') {
      setCoord('[35.8325156915912,34.4425625005989]');
      setHospitalName(e.target.value);
    } else if (e.target.value === 'Hanan') {
      setCoord('[35.8341440535563,34.4437156348123]');
      setHospitalName(e.target.value);
    } else if (e.target.value === 'New Mazloum') {
      setCoord('[35.8327015375112,34.4322675179029]');
      setHospitalName(e.target.value);
    } else if (e.target.value === 'Nini') {
      setCoord('[35.8304536900159,34.4359462677104]');
      setHospitalName(e.target.value);
    } else if (e.target.value === 'Salam') {
      setCoord('[35.8269668716701,34.4217997127383]');
      setHospitalName(e.target.value);
    } else if (e.target.value === 'Dar Zahraa') {
      setCoord('[35.840241561603,34.4156235311001]');
      setHospitalName(e.target.value);
    } else if (e.target.value === 'Rahme') {
      setCoord('[35.8459231291688,34.4139443483969]');
      setHospitalName(e.target.value);
    } else {
      setCoord('[35.8321705503983,34.4126447839212]');
      setHospitalName(e.target.value);
    }
  };

  const handleEmergency = (e) => {
    setEmergency(e.target.value);
  };

  const handleRequest = () => {
    firestore.collection('Request').add({
      operation: 'Request',
      userId: state.setUser.uid,
      name: fullName,
      phone: phone,
      pints: pints,
      donation_type: typex + ' Request',
      bloodType: bloodType,
      location: hospitalName,
      geoCoord: coord,
      neededBy: needed,
      message: purpose,
      date: String(new Date()),
      emergency: emergency,
      fulfilled: 'false',
    });
    history.push(`/requestsent`);
  };

  return (
    <div>
      <form onSubmit={handleRequest} autoComplete="off">
        <div className="flex flex-col bg-pri-red min-h-screen">
          <div className="bg-pri-red">
            <img src={Header} alt="Header" />
          </div>
          <div className="flex flex-col -mt-16">
            <div className="text-gray-500 font-Roboto font-medium">
              {t('requestform.request_form')}
            </div>
            <div className="text-gray-400 text-sm">For {typex}</div>
          </div>
          <div className=" flex flex-col ">
            <div className="ml-4">
              <img src={Back} alt="images" onClick={() => history.goBack()} />
            </div>
            <div className="flex flex-row justify-evenly mt-9  ">
              <div>
                <select
                  required
                  onChange={handleStatus}
                  className="text-xs w-28 p-2 bg-pri-red	border-2 border-white	rounded-lg h-8 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
                h-9"
                >
                  <option value="">
                    {t('requestform.for')}/{t('requestform.others')}
                  </option>

                  <option value="me">Me</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <select
                required
                onChange={handleBloodType}
                className="text-xs w-28 p-2 bg-pri-red	border-2 border-white	rounded-lg h-8 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50
               h-9"
              >
                <option value="">Blood Type</option>
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

            <div className="flex flex-col mt-5">
              <input
                required
                type="text"
                name="fullName"
                value={fullName}
                onChange={onChangeHandler}
                className="px-2 w-3/4 text-xs rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto"
                placeholder={t('requestform.full_name')}
              />

              <input
                required
                type="number"
                name="phone"
                value={phone}
                onChange={onChangeHandler}
                className="px-2 w-3/4 text-xs rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
                placeholder={t('requestform.phone')}
              />

              <select
                required
                onChange={handleLocation}
                className=" text-gray-500 w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
                placeholder={t('requestform.address')}
              >
                <option value="">Hospitals</option>
                <option value="Monla">Monla</option>
                <option value="Islamic">Islamic</option>
                <option value="Hanan">Hanan</option>
                <option value="New Mazloum">New Mazloum</option>
                <option value="Nini">Nini</option>
                <option value="Salam">Salam</option>
                <option value="Dar Zahraa">Dar Zahraa</option>
                <option value="Rahme">Rahme</option>
                <option value="Haykal">Haykal</option>
              </select>

              <select
                required
                onChange={handleEmergency}
                className=" text-gray-500 w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
                placeholder={t('requestform.address')}
              >
                <option value="">Emergency</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              <input
                required
                type="text"
                name="purpose"
                value={purpose}
                onChange={onChangeHandler}
                className="px-2 text-xs h-24 w-3/4 rounded-lg  border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
                placeholder={t('requestform.purpose')}
              />
              <div className="flex flex-row justify-between mt-3 ml-12 mr-6">
                <div>{/* <Example />*/}</div>
                <div className="ml-40 mt-2">
                  <input
                    type="number"
                    name="pints"
                    value={pints}
                    onChange={onChangeHandler}
                    className="placeholder-white ml-1.5  bg-pri-red border-2 border-white px-2 text-xs w-28 rounded-lg h-9 border-2  border-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                    placeholder={t('requestform.pints_need')}
                  />
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>

        <div>
          <div className="absolute " style={{ top: '162vw', left: '65vw' }}>
            <button
              type="submit"
              className="flex flex-row justify-evenly text-gray-500 font-medium font-Roboto bg-white opacity-90 px-2 border-2 border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            >
              Send <img src={Send} alt="" className="ml-3 mt-1" />
            </button>
          </div>
          <div className="absolute" style={{ top: '134vw' }}>
            <img src={Wave} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default withNamespaces()(RequestFormPage);
