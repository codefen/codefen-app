/*
 *
 * EmailsPage reducer
 *
 */

import produce from 'immer';
import {
  GET_EMAILS,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_ERROR,
  GET_TRANSFORM_EMAILS,
} from './constants';

export const initialState = {
  isLoading: false,
  error: '',
  emails: {
    id: '',
    owner_id: '',
    company_id: '',
    company_owned: '',
    email: '',
    info: '',
    confirmed: '',
    eliminado: '',
    creacion: '',
  },
  transformEmails: [],
};

/* eslint-disable default-case, no-param-reassign */
const emailsPageReducer = produce((draft, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      break;
  }
}, initialState);

export default emailsPageReducer;
