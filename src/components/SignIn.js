import React from 'react';
import signInLogo from '../assets/signInLogo.svg';

const SignIn = () => {
  return (
    <div class="bg-transparent">
      <div class="mt-12 ">
        <img
          src={signInLogo}
          alt="images"
          style={{ display: 'block', margin: '0 auto' }}
        />
      </div>

      <div class="font-Roboto text-3xl mt-5 text-gray-500">
        <p>Sign In</p>
      </div>

      <div class=" mt-5">
        <form>
          <div>
            <label for="email" class="text-gray-500 font-Roboto pr-56">
              Email
            </label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              class="  w-3/4 rounded-lg h-9 border-2"
            />
          </div>

          <div class="mt-6">
            <label for="password" class="text-gray-500 font-Roboto pr-48">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              class="  w-3/4 rounded-lg h-9 border-2"
            />
          </div>

          <div class="mt-2 pr-32">
            <input
              type="checkbox"
              id="remember_me"
              name="remember_me"
              class="rounded-lg"
            />
            <label for="remember_me" class="text-gray-500 font-Roboto ml-2">
              Remember Me
            </label>
          </div>

          <div class="mt-32">
            <input
              type="submit"
              value="Sign In"
              class="bg-pink  w-3/4 rounded-lg h-9 text-gray-500 font-Roboto"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
