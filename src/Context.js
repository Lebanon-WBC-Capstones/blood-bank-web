import React, { createContext, useReducer } from 'react';

export const Context = createContext();

const initialState = {
  isLogged: 'false',
  setUser: {},
  language: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'IS_LOGGED':
      return { ...initialState, isLogged: action.payload };
    case 'SET_USER':
      return { ...initialState, setUser: action.payload };
    case 'LANGUAGE':
      return { ...initialState, language: action.payload };
    case 'CREATE_USER':
      return {
        isLogged: action.isLogged,
        setUser: action.setUser,
        language: action.language,
      };
    default:
      return state;
  }
};

export const ContextProvider = (props) => {
  //const { user } = useState('Guest');
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};
