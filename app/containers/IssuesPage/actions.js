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
  GET_SPECIFICALLY_ISSUES,
  GET_SPECIFICALLY_ISSUES_SUCCESS,
  GET_SPECIFICALLY_ISSUES_ERROR,
  GET_TRANSFORM_SPECIFICALLY_ISSUES,
} from './constants';

/**
 * Get Issues, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_ISSUES
 */
export function getIssuesAction() {
  return {
    type: GET_ISSUES,
  };
}

/**
 * Get Specifically Issues, this action starts the request saga
 *
 * @param  {number} companyId The company id
 *
 * @return {object} An action object with a type of GET_ISSUES
 */
export function getSpecificallyIssuesAction(companyId) {
  return {
    type: GET_SPECIFICALLY_ISSUES,
    companyId,
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
export function getIssuesSuccessAction(issues, company) {
  return {
    type: GET_ISSUES_SUCCESS,
    company,
    issues,
  };
}

/**
 * Dispatched when the get specifically issues are successed by the request saga
 *
 * @param  {array | object} issues The issues data
 *
 * @return {object} An action object with a type of GET_SPECIFICALLY_ISSUES_SUCCESS passing the repos
 */
export function getSpecificallyIssuesSuccessAction(issues) {
  return {
    type: GET_SPECIFICALLY_ISSUES_SUCCESS,
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
 * Dispatched when the get specifically issues fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_SPECIFICALLY_ISSUES_ERROR passing the error
 */
export function getSpecificallyIssuesErrorAction(error) {
  return {
    type: GET_SPECIFICALLY_ISSUES_ERROR,
    error,
  };
}

/**
 * Transform issues
 *
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

/**
 * Transform issues
 *
 * @param  {array} transformSpecificallyIssues The specifically transform issues
 *
 * @return {object} An action object with a type of GET_TRANSFORM_SPECIFICALLY_ISSUES
 */
export function getTransformSpecificallyIssuesAction(
  transformSpecificallyIssues,
) {
  return {
    type: GET_TRANSFORM_SPECIFICALLY_ISSUES,
    transformSpecificallyIssues,
  };
}
