import React, { createContext, useState } from 'react';

export const TheContext = createContext();

const TheContextProvidor = (props) => {
  const { user } = useState('Guest');
  return (
    <TheContextProvidor value={{ user }}>{props.children}</TheContextProvidor>
  );
};
export default TheContextProvidor;
