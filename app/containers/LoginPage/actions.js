/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} email The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_EMAIL
 */
export function changeEmailAction(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

/**
 * Changes the input field of the form
 *
 * @param  {string} password The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_PASSWORD
 */
export function changePasswordAction(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

/**
 * Login, this action starts the request saga
 *
 * @return {object} An action object with a type of LOGIN
 */
export function loginAction() {
  return {
    type: LOGIN,
  };
}

/**
 * Dispatched when the user login are successed by the request saga
 *
 * @param  {string} session The session
 * @param  {array} user The user data
 *
 * @return {object} An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function loginSuccessAction(session, user) {
  return {
    type: LOGIN_SUCCESS,
    session,
    user,
  };
}

/**
 * Dispatched when the user login fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOGIN_ERROR passing the error
 */
export function loginErrorAction(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
