/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export const initialState = {
  email: '',
  password: '',
  error: '',
  isLoading: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      draft.email = action.email;
      break;
    case CHANGE_PASSWORD:
      draft.password = action.password;
      break;
    case LOGIN:
      draft.isLoading = true;
      break;
    case LOGIN_SUCCESS:
      draft.isLoading = false;
      draft.email = '';
      draft.password = '';
      break;
    case LOGIN_ERROR:
      draft.isLoading = false;
      draft.email = action.error;
      break;
  }
}, initialState);

export default loginPageReducer;
