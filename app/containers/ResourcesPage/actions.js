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
} from './constants';
/**
 * Login, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_RESOURCES
 */
export function getResourcesAction() {
  return {
    type: GET_RESOURCES,
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
 * Transform resources
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
