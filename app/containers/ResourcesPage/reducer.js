/*
 *
 * ResourcesPage reducer
 *
 */

import produce from 'immer';
import { LOGOUT } from 'containers/App/constants';
import { LOCATION_CHANGE } from 'connected-react-router';
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

export const initialState = {
  isLoading: false,
  error: '',
  resources: {
    id: '',
    owner_id: '',
    company_id: '',
    company_name: '',
    class: '',
    address_domain: '',
    servers: '',
    main_server: '',
    server_pais: '',
    server_pais_code: '',
    server_area: '',
    server_ciudad: '',
    info: '',
    eliminado: '',
    creacion: '',
  },
  specificallyResources: {},
  transformResources: [],
};

/* eslint-disable default-case, no-param-reassign */
const resourcesPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_RESOURCES:
      draft.isLoading = true;
      break;
    case GET_RESOURCES_SUCCESS:
      draft.isLoading = false;
      draft.resources = action.resources;
      break;
    case GET_RESOURCES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case GET_TRANSFORM_RESOURCES:
      draft.isLoading = false;
      draft.transformResources = action.transformResources;
      break;
    case GET_SPECIFICALLY_RESOURCES:
      draft.specificallyCompanyId = action.companyId;
      break;
    case GET_SPECIFICALLY_RESOURCES_SUCCESS:
      draft.specificallyResources = action.resources;
      draft.isLoading = false;
      break;
    case GET_TRANSFORM_SPECIFICALLY_RESOURCES:
      draft.isLoading = false;
      draft.transformSpecificallyResources =
        action.transformSpecificallyResources;
      break;
    case GET_SPECIFICALLY_RESOURCES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case LOCATION_CHANGE:
      if (draft.transformSpecificallyResources)
        draft.transformSpecificallyResources = [];
      break;
    case LOGOUT:
      draft.transformResources = initialState.transformResources;
      draft.transformSpecificallyResources =
        initialState.transformSpecificallyResources;
      draft.resources = initialState.resources;
      draft.error = initialState.error;
      draft.isLoading = initialState.isLoading;
      break;
  }
}, initialState);

export default resourcesPageReducer;
