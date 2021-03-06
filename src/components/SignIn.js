import React from 'react';
import signInLogo from '../assets/signlogo.svg';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="bg-transparent container max-width: 640px">
      <div className="mt-12 ">
        <img src={signInLogo} alt="images" className="block mx-auto" />
      </div>

      <div className="font-Roboto text-3xl mt-5 text-gray-500">
        <p>Sign In</p>
      </div>

      <div className=" mt-5">
        <form>
          <div>
            <label for="email" className="text-gray-500 font-Roboto pr-56">
              Email
            </label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              className="  w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            />
          </div>

          <div className="mt-6">
            <label for="password" className="text-gray-500 font-Roboto pr-48">
              Password
            </label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              className="  w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            />
          </div>

          <div className="mt-2 pr-32">
            <input
              type="checkbox"
              id="remember_me"
              name="remember_me"
              className="rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            />
            <label for="remember_me" className="text-gray-500 font-Roboto ml-2">
              Remember Me
            </label>
          </div>

          <div className="mt-32">
            <Link to={`/dashboard`}>
              <input
                type="submit"
                value="Sign In"
                className="bg-pink  w-3/4 rounded-lg h-9 text-gray-500 font-Roboto focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
