/*
 *
 * DetailPage actions
 *
 */

import {
  PREPARE_ISSUE_ID,
  GET_ISSUE,
  GET_ISSUE_SUCCESS,
  GET_ISSUE_ERROR,
} from './constants';

export function prepareIssueIdAction(issueId) {
  return {
    type: PREPARE_ISSUE_ID,
    issueId,
  };
}

export function getIssueAction(issueId) {
  return {
    type: GET_ISSUE,
    issueId,
  };
}

export function getIssueSuccessAction(issue) {
  return {
    type: GET_ISSUE_SUCCESS,
    issue,
  };
}

export function getIssueErrorAction(error) {
  return {
    type: GET_ISSUE_ERROR,
    error,
  };
}
