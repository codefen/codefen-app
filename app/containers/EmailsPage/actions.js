/*
 *
 * EmailsPage actions
 *
 */

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

/**
 * Get Emails, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_EMAILS
 */
export function getEmailsAction() {
  return {
    type: GET_EMAILS,
  };
}

/**
 * Get Specifically Emails, this action starts the request saga
 *
 * @param  {number} companyId The company id
 *
 * @return {object} An action object with a type of GET_SPECIFICALLY_EMAILS
 */
export function getSpecificallyEmailsAction(companyId) {
  return {
    type: GET_SPECIFICALLY_EMAILS,
    companyId,
  };
}

/**
 * Dispatched when the get emails are successed by the request saga
 *
 * @param  {object} company The user's company
 * @param  {array | object} emails The emails data
 *
 * @return {object} An action object with a type of GET_EMAILS_SUCCESS passing the repos
 */
export function getEmailsSuccessAction(company, emails) {
  return {
    type: GET_EMAILS_SUCCESS,
    company,
    emails,
  };
}

/**
 * Dispatched when the get emails are successed by the request saga
 *
 * @param  {array | object} emails The emails data
 *
 * @return {object} An action object with a type of GET_SPECIFICALLY_EMAILS_SUCCESS passing the repos
 */
export function getSpecificallyEmailsSuccessAction(emails) {
  return {
    type: GET_SPECIFICALLY_EMAILS_SUCCESS,
    emails,
  };
}

/**
 * Dispatched when the get emails fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_EMAILS_ERROR passing the error
 */
export function getEmailsErrorAction(error) {
  return {
    type: GET_EMAILS_ERROR,
    error,
  };
}

/**
 * Dispatched when the get specifically emails fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_SPECIFICALLY_EMAILS_ERROR passing the error
 */
export function getSpecificallyEmailsErrorAction(error) {
  return {
    type: GET_SPECIFICALLY_EMAILS_ERROR,
    error,
  };
}

/**
 * Transform issues
 * @param  {array} transformEmails The transform emails
 *
 * @return {object} An action object with a type of GET_TRANSFORM_EMAILS
 */
export function getTransformEmailsAction(transformEmails) {
  return {
    type: GET_TRANSFORM_EMAILS,
    transformEmails,
  };
}

/**
 * Transform issues
 * @param  {array} transformSpecificallyEmails The specifically transform emails
 *
 * @return {object} An action object with a type of GET_TRANSFORM_EMAILS
 */
export function getTransformSpecificallyEmailsAction(
  transformSpecificallyEmails,
) {
  return {
    type: GET_TRANSFORM_SPECIFICALLY_EMAILS,
    transformSpecificallyEmails,
  };
}
