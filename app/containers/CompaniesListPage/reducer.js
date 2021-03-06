/*
 *
 * CompaniesListPage reducer
 *
 */

import produce from 'immer';
import { LOGOUT } from 'containers/App/constants';
import {
  GET_COMPANIES_LIST,
  GET_COMPANIES_LIST_SUCCESS,
  GET_COMPANIES_LIST_ERROR,
  GET_TRANSFORM_COMPANIES_LIST,
} from './constants';

export const initialState = {
  isLoading: false,
  error: '',
  companiesList: [],
  transformCompaniesList: [],
};

/* eslint-disable default-case, no-param-reassign */
const companiesListPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_COMPANIES_LIST:
      draft.isLoading = true;
      break;
    case GET_COMPANIES_LIST_SUCCESS:
      draft.isLoading = false;
      draft.companiesList = action.companiesList;
      break;
    case GET_COMPANIES_LIST_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case GET_TRANSFORM_COMPANIES_LIST:
      draft.transformCompaniesList = action.transformCompaniesList;
      break;
    case LOGOUT:
      draft.transformCompaniesList = initialState.transformCompaniesList;
      draft.companiesList = initialState.companiesList;
      draft.error = initialState.error;
      draft.isLoading = initialState.isLoading;
      break;
  }
}, initialState);

export default companiesListPageReducer;
