import React, { useReducer } from 'react';

export const initialUser = {
  isLogged: false,
  email: '',
  language: '',
  /*password: '',*/
};
/*should i add pass here or not?*/
export function dashReducer(state, action) {
  switch (action.type) {
    case 'loging':
      return { ...initialUser, isLogged: true };
    /*case 'kk':
        return {...initialUser, password:''};*/
    case 'email':
      return { ...initialUser, email: '' };
    case 'lang':
      return { ...initialUser, language: '' };
    case 'createUser':
      return { isLogged: true, email: '', language: 'english' };
    default:
      throw new Error();
  }
}
