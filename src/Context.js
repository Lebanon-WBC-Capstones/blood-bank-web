import React, { createContext, useState } from 'react';

export const Context = createContext();

function ContextProvidor(props) {
  const { user } = useState('Guest');
  return <Context.Providor value={{ user }}>{props.children}</Context.Providor>;
}
export default ContextProvidor;
