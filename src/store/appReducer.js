import React, { useReducer } from 'react';

export const initialState = {
  signIn: {
    email: '',
    password: '',
  },
  signUp: {
    email: '',
    password: '',
  },
  request: {
    fullName: '',
    address: '',
    phone: '',
    emergency: 'off',
  },
  donate: {
    date: 'MMMM/DD/YYYY',
    time: '00:00',
  },

  formSubmitted: false,
};

export function appReducer(state, action) {
  switch (action.type) {
    case 'signIn':
      return { ...initialState.signIn, formSubmitted: false };
    case 'signUp':
      return { ...initialState.signUp, formSubmitted: false };
    case 'sendRequest':
      return { ...initialState.request, formSubmitted: false };
    case 'sendDonate':
      return { ...initialState.donate, formSubmitted: false };
    default:
      throw new Error();
  }
}
