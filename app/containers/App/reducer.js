/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import { LOGIN_SUCCESS } from 'containers/LoginPage/constants';

export const initialState = {
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
const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      draft.user = action.user;
  }
}, initialState);

export default loginPageReducer;
