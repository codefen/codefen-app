/*
 *
 * EmailsPage reducer
 *
 */

import produce from 'immer';
import { LOGOUT } from 'containers/App/constants';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  GET_EMAILS,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_ERROR,
  GET_TRANSFORM_EMAILS,
  GET_SPECIFICALLY_EMAILS,
  GET_SPECIFICALLY_EMAILS_SUCCESS,
  GET_SPECIFICALLY_EMAILS_ERROR,
  GET_TRANSFORM_SPECIFICALLY_EMAILS,
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
  specificallyEmails: {},
  transformEmails: [],
};

/* eslint-disable default-case, no-param-reassign */
const emailsPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_EMAILS:
      draft.isLoading = true;
      break;
    case GET_EMAILS_SUCCESS:
      draft.isLoading = false;
      draft.emails = action.emails;
      break;
    case GET_EMAILS_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case GET_TRANSFORM_EMAILS:
      draft.isLoading = false;
      draft.transformEmails = action.transformEmails;
      break;
    case GET_SPECIFICALLY_EMAILS:
      draft.specificallyCompanyId = action.companyId;
      break;
    case GET_SPECIFICALLY_EMAILS_SUCCESS:
      draft.specificallyEmails = action.emails;
      draft.isLoading = false;
      break;
    case GET_TRANSFORM_SPECIFICALLY_EMAILS:
      draft.isLoading = false;
      draft.transformSpecificallyEmails = action.transformSpecificallyEmails;
      break;
    case GET_SPECIFICALLY_EMAILS_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case LOCATION_CHANGE:
      if (draft.transformSpecificallyEmails)
        draft.transformSpecificallyEmails = [];
      break;
    case LOGOUT:
      draft.transformEmails = initialState.transformEmails;
      draft.transformSpecificallyEmails =
        initialState.transformSpecificallyEmails;
      draft.emails = initialState.emails;
      draft.error = initialState.error;
      draft.isLoading = initialState.isLoading;
      break;
  }
}, initialState);

export default emailsPageReducer;
