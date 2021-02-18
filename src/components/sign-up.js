import React from 'react';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import gmail from '../assets/gmail.svg';
export default function SignUp() {
  return (
    <div
      class="mt-5"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '600px',
      }}
    >
      <div
        class="mb-5"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      >
        <img src={logo} alt="logo" />
      </div>
      <div
        class="mb-5 pb-1"
        style={{
          width: '90%',
          marginLeft: 'Auto',
          marginRight: 'auto',
          borderBottomColor: 'rgba(202, 199, 199, 1)',
          borderBottomWidth: 1,
        }}
      >
        <p class="text-center font-roboto">Sign Up With</p>
      </div>
      <div>
        <div
          style={{
            width: '90%',
            marginLeft: 'Auto',
            marginRight: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <button
            class="bg-pink p-2 font-roboto"
            style={{
              borderRadius: '0.75rem',
              width: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <img src={gmail} alt="gmail" /> <p class="pl-2">Google</p>
          </button>
          <button
            class="bg-pink p-2 font-roboto"
            style={{
              borderRadius: '0.75rem',
              width: 'auto',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <img src={facebook} alt="gmail" /> <p class="pl-2">Facebook</p>
          </button>
        </div>
        <div>
          <p class="font-roboto text-center">Or</p>
          <hr
            class="ml-auto mr-auto"
            style={{
              backgroundColor: 'red',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        </div>
      </div>

      <div class="m-5">
        <form>
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            class="font-roboto m-0.25 "
          >
            Nickname
          </label>
          <br />
          <input class="border-2 m-1 w-3/4 h-9 rounded-lg" />
          <br />
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            class="font-roboto m-1"
          >
            Password
          </label>
          <br />
          <input class="border-2 m-1 w-3/4 h-9 rounded-lg" />
          <br />
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            class="font-roboto m-0.25"
          >
            Confirm Password
          </label>
          <br />
          <input class="border-2 m-1 w-3/4 h-9 rounded-lg" />
          <br />
          <input type="checkbox" name="Terms" class="rounded-lg" />{' '}
          <label
            style={{ color: 'rgba(103, 97, 97, 1)' }}
            class="font-roboto m-0.25 text-xs"
          >
            I Agree to Terms Conditions and Privacy Policy
          </label>
          <input
            value="Sign Up"
            type="submit"
            style={{ marginLeft: '10%' }}
            class="bg-pink  w-3/4 rounded-lg h-9 text-gray-500 font-Roboto m-1"
          />
        </form>
      </div>
    </div>
  );
}
