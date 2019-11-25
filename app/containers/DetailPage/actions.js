/*
 *
 * DetailPage actions
 *
 */

import {
  GET_ISSUE,
  GET_ISSUE_SUCCESS,
  GET_ISSUE_ERROR,
  GET_SPECIFICALLY_ISSUE,
  GET_SPECIFICALLY_ISSUE_SUCCESS,
  GET_SPECIFICALLY_ISSUE_ERROR,
} from './constants';

export function getIssueAction(issueId) {
  return {
    type: GET_ISSUE,
    issueId,
  };
}

export function getSpecificallyIssueAction(issueId, companyId) {
  return {
    type: GET_SPECIFICALLY_ISSUE,
    issueId,
    companyId,
  };
}

export function getIssueSuccessAction(issue) {
  return {
    type: GET_ISSUE_SUCCESS,
    issue,
  };
}

export function getSpecificallyIssueSuccessAction(issue) {
  return {
    type: GET_SPECIFICALLY_ISSUE_SUCCESS,
    issue,
  };
}

export function getIssueErrorAction(error) {
  return {
    type: GET_ISSUE_ERROR,
    error,
  };
}

export function getSpecificallyIssueErrorAction(error) {
  return {
    type: GET_SPECIFICALLY_ISSUE_ERROR,
    error,
  };
}
