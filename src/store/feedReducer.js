import React, { useReducer } from 'react';

export const initialFeed = {};

export function historyReducer(state, action) {
  switch (action.type) {
    case 'renderFeed':
      return { initialFeed };
    default:
      throw new Error();
  }
}
