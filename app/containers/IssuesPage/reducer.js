/*
 *
 * IssuesPage reducer
 *
 */

import produce from 'immer';
import { LOGOUT } from 'containers/App/constants';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  GET_ISSUES,
  GET_SPECIFICALLY_ISSUES,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_ERROR,
  GET_TRANSFORM_ISSUES,
  GET_SPECIFICALLY_ISSUES_SUCCESS,
  GET_SPECIFICALLY_ISSUES_ERROR,
  GET_TRANSFORM_SPECIFICALLY_ISSUES,
} from './constants';

export const initialState = {
  isLoading: false,
  error: '',
  issues: {
    id: '',
    company_id: '',
    company_nickname: '',
    resource_id: '',
    risk_level: '',
    name: '',
    issue: '',
    class: '',
    domain: '',
    address: '',
    info: '',
    fix: '',
    researcher_id: '',
    researcher_username: '',
    is_riskful: '',
    price: '',
    paid: '',
    solved: '',
    eliminado: '',
    creacion: '',
  },
  specificallyIssues: {},
  transformIssues: [],
};

/* eslint-disable default-case, no-param-reassign */
const issuesPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_ISSUES:
      draft.isLoading = true;
      break;
    case GET_ISSUES_SUCCESS:
      draft.isLoading = false;
      draft.issues = action.issues;
      break;
    case GET_TRANSFORM_ISSUES:
      draft.isLoading = false;
      draft.transformIssues = action.transformIssues;
      break;
    case GET_ISSUES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case GET_SPECIFICALLY_ISSUES:
      draft.specificallyCompanyId = action.companyId;
      break;
    case GET_SPECIFICALLY_ISSUES_SUCCESS:
      draft.specificallyIssues = action.issues;
      draft.isLoading = false;
      break;
    case GET_TRANSFORM_SPECIFICALLY_ISSUES:
      draft.isLoading = false;
      draft.transformSpecificallyIssues = action.transformSpecificallyIssues;
      break;
    case GET_SPECIFICALLY_ISSUES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case LOCATION_CHANGE:
      if (draft.transformSpecificallyIssues)
        draft.transformSpecificallyIssues = [];
      break;
    case LOGOUT:
      draft.transformIssues = initialState.transformIssues;
      draft.transformSpecificallyIssues =
        initialState.transformSpecificallyIssues;
      draft.issue = initialState.issue;
      draft.error = initialState.error;
      draft.isLoading = initialState.isLoading;
      break;
  }
}, initialState);

export default issuesPageReducer;
