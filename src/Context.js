import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvidor = (props) => {
  const { user } = useState('Guest');
  return <ContextProvidor value={{ user }}>{props.children}</ContextProvidor>;
};
export default ContextProvidor;
