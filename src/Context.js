import React, { createContext, useState } from 'react';

export const TheContext = createContext();

const TheContextProvidor = (props) => {
  const { user, setUser } = useState('Guest');
  return (
    <TheContextProvidor value={{ user }}>{props.children}</TheContextProvidor>
  );
};
export default TheContextProvidor;
