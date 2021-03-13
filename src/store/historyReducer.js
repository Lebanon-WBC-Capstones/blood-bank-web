import React, { useReducer } from 'react';

export const initialHistory = {};

export function historyReducer(state, action) {
  switch (action.type) {
    case 'renderHistory':
      return { initialHistory };
    case 'filterHistory':
      return state.filter((_, idx) => idx !== action.idx);
    default:
      throw new Error();
  }
}
