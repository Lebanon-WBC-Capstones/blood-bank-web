import React from 'react';
import dropRequest from '../assets/dropRequest.svg';
import Back from '../assets/back.svg';
import Wave from '../assets/BottomRequest.svg';
//import Send from '../assets/send.svg';
import Header from '../assets/headerRequest.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, useHistory } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

function RequestFormPage({ t }) {
  const history = useHistory();
  const { type: typex } = useParams();
  return (
    <div>
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
          <div className="flex flex-row mt-5 ml-28 ">
            <div>
              <select
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
            <div className="relative	flex-initial ml-4 -mt-4">
              <span className=" absolute text-3xl top-2 left-3 text-white">
                A
              </span>
              <button className="absolute -right-2 rounded-full w-7 h-7 text-lg align-top leading-4	 text-white bg-gray-600		border-2	border-white	">
                +
              </button>
              <img src={dropRequest} alt="images" />
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="px-2 w-3/4 text-xs rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto"
              placeholder={t('requestform.full_name')}
            />

            <input
              type="number"
              id="phone"
              name="phone"
              className="px-2 w-3/4 text-xs rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.phone')}
            />

            <input
              type="text"
              id="address"
              name="address"
              className=" px-2 w-3/4 text-xs rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.address')}
            />

            <input
              type="text"
              id="Emergency"
              name="Emergency"
              className="px-2 text-xs w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.emergency')}
            />

            <input
              type="text"
              id="purpose"
              name="purpose"
              className=" px-2 text-xs h-24 w-3/4 rounded-lg  border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 block mx-auto mt-3"
              placeholder={t('requestform.purpose')}
            />
            <div className="flex flex-row justify-between mt-3 ml-12 mr-6">
              <div className="ml-40 mt-2">
                <input
                  type="number"
                  id="pints"
                  name="pints"
                  className=" placeholder-white ml-1.5  bg-pri-red border-2 border-white px-2 text-xs w-28 rounded-lg h-9 border-2  border-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50  "
                  placeholder={t('requestform.pints_need')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute" style={{ top: '134vw' }}>
          <img src={Wave} alt="" />
        </div>
      </div>
    </div>
  );
}

export default withNamespaces()(RequestFormPage);
