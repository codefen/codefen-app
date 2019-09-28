/*
 *
 * IssuesPage reducer
 *
 */

import produce from 'immer';
import { GET_ISSUES, GET_ISSUES_SUCCESS, GET_ISSUES_ERROR } from './constants';

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
    case GET_ISSUES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default issuesPageReducer;
