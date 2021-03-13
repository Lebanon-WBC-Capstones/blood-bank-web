import React, { useState, useContext } from 'react';
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
import { withNamespaces } from 'react-i18next';
import { firestore } from '../api/firebase.js';
import { Context } from '../Context';

function RequestFormPage({ t }) {
  const [state, dispatch] = useContext(Context);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState(0);
  const [purpose, setPurpose] = useState('');
  const [emergency, setEmergency] = useState('');
  const [pints, setPints] = useState(0);
  const [needed, setNeeded] = useState('');
  const [coord, setCoord] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const history = useHistory();
  const { type: typex } = useParams();
  //const { icon: iconx } = useParams();

  /*const [startDate, setStartDate] = useState(new Date());
  const Example = ({ t }) => {
    return (
      <DatePicker
        className="w-20"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    );
  };*/

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
    const d = new Date();
    firestore.collection('Request').add({
      operation: 'Request',
      userId: state.setUser.uid,
      name: fullName,
      phone: phone,
      pints: pints,
      donation_type: typex + ' Request',
      bloodType: 'A',
      rhGroup: '+',
      location: hospitalName,
      geoCoord: coord,
      neededBy: needed,
      message: purpose,
      date: String(new Date()),
      emergency: emergency,
      fulfilled: 'false',
    });
  };

  return (
    <div>
      <div className="flex flex-col bg-pri-red h-screen">
        <div className="bg-pri-red h-screan">
          <img src={Header} alt="Header" />
        </div>
        <div className="flex flex-col -mt-16">
          <div className="text-gray-600">{t('requestform.request_form')}</div>
          <div className="text-gray-400">For {typex}</div>
        </div>
        <div className=" flex flex-col ">
          <div className="ml-4">
            <img src={Back} alt="images" onClick={() => history.goBack()} />
          </div>
          <div className="flex flex-row mt-5 ml-28 ">
            <div>
              <select
                onChange={handleStatus}
                className="text-xs	bg-pri-red	border-2 border-white	rounded-xl h-8 text-white
               h-10"
              >
                <option value="">
                  {t('requestform.for')}/{t('requestform.others')}
                </option>
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
              name="fullName"
              value={fullName}
              onChange={onChangeHandler}
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto"
              placeholder={t('requestform.full_name')}
            />

            <input
              type="number"
              name="phone"
              value={phone}
              onChange={onChangeHandler}
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.phone')}
            />

            {/* <input
              type="text"
              name="address"
              //value={address}
              onChange={onChangeHandler}
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.address')}
          />*/}

            <select
              onChange={handleLocation}
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.address')}
            >
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

            {/* <input
              type="text"
              name="emergency"
              value={emergency}
              onChange={onChangeHandler}
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.emergency')}
           />*/}

            <select
              onChange={handleEmergency}
              className=" w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.address')}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <input
              type="text"
              name="purpose"
              value={purpose}
              onChange={onChangeHandler}
              className="h-24 w-3/4 rounded-lg  border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.purpose')}
            />
            <div className="flex flex-row justify-between mt-3 ml-12 mr-6">
              <div>{/* <Example />*/}</div>
              <div>
                <input
                  type="number"
                  name="pints"
                  value={pints}
                  onChange={onChangeHandler}
                  className=" w-3/4 rounded-lg h-9 border-2  border-white   "
                  placeholder={t('requestform.pints_need')}
                />
              </div>
            </div>

            <div>
              <div>
                <img src={Wave} alt="" />
                <button onClick={handleRequest}>send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(RequestFormPage);
