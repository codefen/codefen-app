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
