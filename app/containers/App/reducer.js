/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import { LOGIN_SUCCESS } from 'containers/LoginPage/constants';
import { TOGGLE_SIDEBAR } from './constants';

export const initialState = {
  isCollapsed: false,
  session: '',
  user: {
    id: '',
    role: '',
    email: '',
    username: '',
    password: '',
    balance: '',
    company_id: '',
    area_code: '',
    phone_number: '',
    mfa_recover: '',
    condicion: '',
    eliminado: '',
    creacion: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      draft.session = action.session;
      draft.user = action.user;
      break;
    case TOGGLE_SIDEBAR:
      draft.isCollapsed = !draft.isCollapsed;
      break;
  }
}, initialState);

export default appReducer;
