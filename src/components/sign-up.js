import React from 'react';
import logo from '../assets/signlogo.svg';
import gmail from '../assets/gmail.svg';
import { withNamespaces } from 'react-i18next';
function SignUp({ setCount, count, t }) {
  return (
    <div
      className="mt-5 flex flex-col justify-center "
      style={{
        maxWidth: '600px',
      }}
    >
      <div className="mb-5 flex justify-around">
        <img src={logo} alt="logo" />
      </div>
      <div
        className="mb-5 pb-1 mx-auto"
        style={{
          width: '90%',
          borderBottomColor: 'rgba(202, 199, 199, 1)',
          borderBottomWidth: 1,
        }}
      >
        <p className="text-center text-gray-500 font-roboto">
          {t('signup.sign_up_with')}
        </p>
      </div>
      <div>
        <div className="flex justify-around mx-auto w-full">
          <button
            className="bg-pink p-2 font-roboto flex justify-between focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            style={{
              borderRadius: '0.75rem',
              width: 'auto',
            }}
          >
            {' '}
            <img src={gmail} alt="gmail" />{' '}
            <p className="pl-2 text-gray-500 font-roboto">
              {t('signup.gmail')}
            </p>
          </button>
        </div>

        <div
          className="mb-5 pb-1 mx-auto"
          style={{
            width: '90%',
            borderBottomColor: 'rgba(202, 199, 199, 1)',
            borderBottomWidth: 1,
          }}
        >
          <p className="text-center text-gray-500 font-roboto">
            {t('signup.or')}
          </p>
        </div>
      </div>

      <div className="m-5">
        <form>
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            className="font-roboto m-0.25 "
          >
            {t('signup.gmail')}
          </label>
          <br />
          <input className="border-2 m-1 w-full h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" />
          <br />
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            className="font-roboto m-1"
          >
            {t('signup.password')}
          </label>
          <br />
          <input className="border-2 m-1 w-full h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" />
          <br />
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            className="font-roboto m-0.25"
          >
            {t('signup.confirm_password')}
          </label>
          <br />
          <input className="border-2 m-1 w-full h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" />
          <br />

          <div className="flex justify-center mt-2"></div>
          <button
            type="submit"
            className="bg-pink  w-full rounded-lg h-9 text-gray-500 font-Roboto self-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            onClick={() => setCount(count + 1)}
          >
            {t('signup.sign_up')}
          </button>
        </form>
      </div>
    </div>
  );
}
export default withNamespaces()(SignUp);
