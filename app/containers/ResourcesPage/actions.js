/*
 *
 * ResourcesPage actions
 *
 */

import {
  GET_RESOURCES,
  GET_RESOURCES_SUCCESS,
  GET_RESOURCES_ERROR,
  GET_TRANSFORM_RESOURCES,
  GET_SPECIFICALLY_RESOURCES,
  GET_SPECIFICALLY_RESOURCES_SUCCESS,
  GET_SPECIFICALLY_RESOURCES_ERROR,
  GET_TRANSFORM_SPECIFICALLY_RESOURCES,
} from './constants';

/**
 * Get Resources, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_RESOURCES
 */
export function getResourcesAction() {
  return {
    type: GET_RESOURCES,
  };
}

/**
 * Get Specifically Resources, this action starts the request saga
 *
 *  @param  {number} companyId The company id
 *
 *  @return {object} An action object with a type of GET_SPECIFICALLY_RESOURCES
 */
export function getSpecificallyResourcesAction(companyId) {
  return {
    type: GET_SPECIFICALLY_RESOURCES,
    companyId,
  };
}

/**
 * Dispatched when the get resources are successed by the request saga
 *
 * @param  {object} company The user's company
 * @param  {array | object} resources The resources data
 *
 * @return {object} An action object with a type of GET_RESOURCES_SUCCESS passing the repos
 */
export function getResourcesSuccessAction(company, resources) {
  return {
    type: GET_RESOURCES_SUCCESS,
    company,
    resources,
  };
}

/**
 * Dispatched when the get resources are successed by the request saga
 *
 * @param  {object | array} resources The specifically resources data
 *
 * @return {object} An action object with a type of GET_SPECIFICALLY_RESOURCES_SUCCESS passing the repos
 */
export function getSpecificallyResourcesSuccessAction(resources) {
  return {
    type: GET_SPECIFICALLY_RESOURCES_SUCCESS,
    resources,
  };
}

/**
 * Dispatched when the get resources fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_RESOURCES_ERROR passing the error
 */
export function getResourcesErrorAction(error) {
  return {
    type: GET_RESOURCES_ERROR,
    error,
  };
}

/**
 * Dispatched when the get specifically resources fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_SPECIFICALLY_RESOURCES_ERROR passing the error
 */
export function getSpecificallyResourcesErrorAction(error) {
  return {
    type: GET_SPECIFICALLY_RESOURCES_ERROR,
    error,
  };
}

/**
 * Transform resources
 *
 * @param  {array} transformResources The transform resources
 *
 * @return {object} An action object with a type of GET_TRANSFORM_RESOURCES
 */
export function getTransformResourcesAction(transformResources) {
  return {
    type: GET_TRANSFORM_RESOURCES,
    transformResources,
  };
}

/**
 * Transform specifically resources
 *
 * @param  {array} transformSpecificallyResources The transform resources
 *
 * @return {object} An action object with a type of GET_TRANSFORM_SPECIFICALLY_RESOURCES
 */
export function getTransformSpecificallyResourcesAction(
  transformSpecificallyResources,
) {
  return {
    type: GET_TRANSFORM_SPECIFICALLY_RESOURCES,
    transformSpecificallyResources,
  };
}
