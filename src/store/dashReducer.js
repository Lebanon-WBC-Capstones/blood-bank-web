import React, { useReducer } from 'react';

export const initialDash = {
  name: '',
  bloodType: '',
  rhType: '',
  city: '',
  avatar: '',
};

export function dashReducer(state, action) {
  switch (action.type) {
    case 'updateName':
      return { ...initialDash, name: '' };
    case 'decrement':
      return { ...initialDash, bloodType: '' };
    case 'dsd':
      return { ...initialDash, rhType: '' };
    case 'gg':
      return { ...initialDash, city: '' };
    case 'f':
      return { ...initialDash, avatar: '' };
    case 'createDash':
      return { name: '', bloodType: '', rhType: '', city: '', avatar: '' };
    default:
      throw new Error();
  }
}
