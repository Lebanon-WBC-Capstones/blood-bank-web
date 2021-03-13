import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = (props) => {
  const { user } = useState('Guest');
  return <Context.Provider value={{ user }}>{props.children}</Context.Provider>;
};
export default ContextProvider;
