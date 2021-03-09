import React, { createContext, useState } from 'react';

export const TheContext = createContext();

// export const Context = (props) => {
//   const { user } = useState('Guest');
// };

function Context(props) {
  const { user } = useState('Guest');
  return <Context.Providor value={{ user }}>{props.children}</Context.Providor>;
}
export default Context;
