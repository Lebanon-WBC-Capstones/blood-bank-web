import React from 'react';
import logo from '../assets/signlogo.svg';
import facebook from '../assets/facebook.svg';
import gmail from '../assets/gmail.svg';
export default function SignUp({ setCount, count }) {
  return (
    <div
      className="mt-5 flex flex-col justify-center container"
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
        <p className="text-center font-roboto">Sign Up With</p>
      </div>
      <div>
        <div
          style={{
            width: '90%',
          }}
          className="flex justify-around mx-auto"
        >
          <button
            className="bg-pink p-2 font-roboto flex justify-between focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            style={{
              borderRadius: '0.75rem',
              width: 'auto',
            }}
          >
            {' '}
            <img src={gmail} alt="gmail" /> <p className="pl-2">Google</p>
          </button>
          <button
            className="bg-pink p-2 font-roboto flex justify-between focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            style={{
              borderRadius: '0.75rem',
              width: 'auto',
            }}
          >
            {' '}
            <img src={facebook} alt="gmail" /> <p className="pl-2">Facebook</p>
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
          <p className="text-center font-roboto">Or</p>
        </div>
      </div>

      <div className="m-5">
        <form>
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            className="font-roboto m-0.25 "
          >
            FullName
          </label>
          <br />
          <input className="border-2 m-1 w-3/4 h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" />
          <br />
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            className="font-roboto m-1"
          >
            Password
          </label>
          <br />
          <input className="border-2 m-1 w-3/4 h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" />
          <br />
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            className="font-roboto m-0.25"
          >
            Confirm Password
          </label>
          <br />
          <input className="border-2 m-1 w-3/4 h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50" />
          <br />
          <input
            type="checkbox"
            name="Terms"
            className="rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 "
          />{' '}
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            className="font-roboto m-0.25 text-xs"
          >
            I Agree to Terms Conditions and Privacy Policy
          </label>
          <div className="flex justify-center mt-2"></div>
          <button
            type="submit"
            className="bg-pink  w-3/4 rounded-lg h-9 text-gray-500 font-Roboto self-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            onClick={() => setCount(count + 1)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
