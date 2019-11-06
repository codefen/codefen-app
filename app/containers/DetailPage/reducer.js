/*
 *
 * DetailPage reducer
 *
 */

import produce from 'immer';
import { GET_ISSUE, GET_ISSUE_SUCCESS, GET_ISSUE_ERROR } from './constants';

export const initialState = {
  isLoading: false,
  error: '',
  prepareIssueId: '',
  issue: {
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
const detailPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_ISSUE:
      draft.isLoading = true;
      draft.prepareIssueId = parseInt(action.issueId, 10);
      break;
    case GET_ISSUE_SUCCESS:
      draft.isLoading = false;
      draft.issue = action.issue;
      break;
    case GET_ISSUE_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default detailPageReducer;
