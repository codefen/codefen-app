/*
 *
 * IssuesPage actions
 *
 */

import {
  GET_ISSUES,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_ERROR,
  GET_TRANSFORM_ISSUES,
} from './constants';

/**
 * Login, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_ISSUES
 */
export function getIssuesAction() {
  return {
    type: GET_ISSUES,
  };
}

/**
 * Dispatched when the get issues are successed by the request saga
 *
 * @param  {object} company The user's company
 * @param  {array | object} issues The issues data
 *
 * @return {object} An action object with a type of GET_ISSUES_SUCCESS passing the repos
 */
export function getIssuesSuccessAction(company, issues) {
  return {
    type: GET_ISSUES_SUCCESS,
    company,
    issues,
  };
}

/**
 * Dispatched when the get issues fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_ISSUES_ERROR passing the error
 */
export function getIssuesErrorAction(error) {
  return {
    type: GET_ISSUES_ERROR,
    error,
  };
}

/**
 * Transform issues
 * @param  {array} transformIssues The transform issues
 *
 * @return {object} An action object with a type of GET_TRANSFORM_ISSUES
 */
export function getTransformIssuesAction(transformIssues) {
  return {
    type: GET_TRANSFORM_ISSUES,
    transformIssues,
  };
}
