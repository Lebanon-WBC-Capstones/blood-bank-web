import React, { useState, useEffect } from 'react';
import signInLogo from '../assets/signlogo.svg';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../api/firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignIn = (e, email, password) => {
    e.preventDefault();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
      .then(() => history.push('/dashboard'))
      .catch((e) => console.log('failed'));
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };
  //This will be in the context file
  useEffect(() => {
    const userListener = auth.onAuthStateChanged((user) =>
      user ? console.log('authen') : console.log('not authen')
    );
    return userListener;
  }, []);

  return (
    <div className="bg-transparent container max-width: 640px">
      <div className="mt-12 ">
        <img src={signInLogo} alt="images" className="block mx-auto" />
      </div>

      <div className="font-Roboto text-3xl mt-5 text-gray-500">
        <p>Sign In</p>
      </div>

      <div className=" mt-5">
        <form onSubmit={(e) => handleSignIn(e, email, password)}>
          <div>
            <label className="text-gray-500 font-Roboto pr-56">Email</label>
            <br />
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={email}
              onChange={(e) => onChangeHandler(e)}
              className="  w-3/4 rounded-lg h-9 border-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            />
          </div>

          <div className="mt-6">
            <label className="text-gray-500 font-Roboto pr-48">Password</label>
            <br />
            <input
              type="password"
              id="userPassword"
              name="userPassword"
              value={password}
              onChange={(e) => onChangeHandler(e)}
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
            <label className="text-gray-500 font-Roboto ml-2">
              Remember Me
            </label>
          </div>

          <div className="mt-32">
            <input
              type="submit"
              value="Sign In"
              className="bg-pink  w-3/4 rounded-lg h-9 text-gray-500 font-Roboto focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
