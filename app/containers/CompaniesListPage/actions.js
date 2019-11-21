/*
 *
 * CompaniesListPage actions
 *
 */

import {
  GET_COMPANIES_LIST,
  GET_COMPANIES_LIST_SUCCESS,
  GET_COMPANIES_LIST_ERROR,
  GET_TRANSFORM_COMPANIES_LIST,
} from './constants';

/**
 * Get Companies list, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_COMPANIES_LIST
 */
export function getCompaniesListAction() {
  return {
    type: GET_COMPANIES_LIST,
  };
}

/**
 * Dispatched when the get companies list are successed by the request saga
 *
 * @param  {array | object} companiesList The companies list data
 *
 * @return {object} An action object with a type of GET_COMPANIES_LIST_SUCCESS passing the repos
 */
export function getCompaniesListSuccessAction(companiesList) {
  return {
    type: GET_COMPANIES_LIST_SUCCESS,
    companiesList,
  };
}

/**
 * Dispatched when the get companies list fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_COMPANIES_LIST_ERROR passing the error
 */
export function getCompaniesListErrorAction(error) {
  return {
    type: GET_COMPANIES_LIST_ERROR,
    error,
  };
}

/**
 * Transform issues
 * @param  {array} transformCompaniesList The transform companies list
 *
 * @return {object} An action object with a type of GET_TRANSFORM_COMPANIES_LIST
 */
export function getTransformCompaniesListAction(transformCompaniesList) {
  return {
    type: GET_TRANSFORM_COMPANIES_LIST,
    transformCompaniesList,
  };
}
