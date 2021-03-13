import React, { useReducer } from 'react';

export const initialNotification = {};

export function dashReducer(state, action) {
  switch (action.type) {
    case 'renderNotifications':
      return { initialNotification };
    case 'removeNotification':
      return state.filter((_, idx) => idx !== action.idx);
    case 'clearNotifications':
      return {};
    default:
      throw new Error();
  }
}
