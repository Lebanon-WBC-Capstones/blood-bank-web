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
      return { ...initialState.signIn, formSubmitted: true };
    case 'signUp':
      return { ...initialState.signUp, formSubmitted: true };
    case 'sendRequest':
      return { ...initialState.request, formSubmitted: true };
    case 'sendDonate':
      return { ...initialState.donate, formSubmitted: true };
    default:
      throw new Error();
  }
}
