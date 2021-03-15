import React, { useState, useContext } from 'react';
import logo from '../assets/signlogo.svg';
import gmail from '../assets/gmail.svg';
import { withNamespaces } from 'react-i18next';
import { auth } from '../api/firebase.js';
import { useHistory } from 'react-router-dom';
import { provider } from '../api/firebase.js';
import { Context } from '../Context';

function SignUp({ setCount, count, t }) {
  const dispatch = useContext(Context)[1];
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [msg, setMsg] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else {
      setConfirmpass(value);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmpass) {
      setMsg('the password not macth');
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
          dispatch({
            type: 'CREATE_USER',
            isLogged: 'true',
            setUser: user,
            language: 'english',
          });

          history.push(`/confirm`);
          setMsg('');
        })
        .catch((error) => {
          //let errorCode = error.code;
          // let errorMessage = error.message;
        });
    }
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // let credential = result.credential;
        // let token = credential.accessToken;
        let user = result.user;
        dispatch({
          type: 'CREATE_USER',
          isLogged: 'true',
          setUser: user,
          language: 'english',
        });
        history.push(`/confirm`);

        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // The email of the user's account used.
        //let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // let credential = error.credential;
        // ...
      });
  };
  return (
    <div
      className=" flex flex-col justify-center "
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
        <div className=" mx-auto ">
          <button
            className="border-pink border-2  bg-pink rounded-full mb-2 p-2 font-roboto  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            style={{}}
            onClick={signInWithGoogle}
          >
            {' '}
            <img src={gmail} alt="gmail" />{' '}
            {/* <p className="font-medium text-gray-500 font-roboto">
              {t('signup.gmail')}
          </p>*/}
          </button>
        </div>

        <div
          className=" pb-1 mx-auto"
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
        <form onSubmit={handleSignUp} autocomplete="off">
          <label className="font-roboto m-0.25 text-gray-500 mr-48 sm:mr-96 sm:pr-4">
            {t('signup.email')}
          </label>
          <br />
          <input
            required
            name="userEmail"
            value={email}
            type="email"
            onChange={onChangeHandler}
            className="pl-2 text-gray-500 border-2 m-1 w-full h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          />
          <br />
          <label className="font-roboto m-1 text-gray-500 mr-44 sm:mr-96">
            {t('signup.password')}
          </label>
          <br />
          <input
            required
            name="userPassword"
            value={password}
            type="password"
            onChange={onChangeHandler}
            className="pl-2 text-gray-500 border-2 m-1 w-full h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          />
          <br />
          <label className="font-roboto m-0.25 text-gray-500 mr-28 mt-1 sm:mr-80">
            {t('signup.confirm_password')}
          </label>
          <br />
          <input
            required
            type="password"
            name="userConfirm"
            value={confirmpass}
            onChange={onChangeHandler}
            className="pl-2 text-gray-500 border-2 m-1 w-full h-9 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          />
          <br />
          <div>{msg}</div>
          <br />

          <div className="flex justify-center "></div>
          <button
            type="submit"
            className="ml-1 border-2 border-pink bg-pink w-full rounded-lg h-9 text-gray-500 font-Roboto self-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
          >
            {t('signup.sign_up')}
          </button>
        </form>
      </div>
    </div>
  );
}
export default withNamespaces()(SignUp);
