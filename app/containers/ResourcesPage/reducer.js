/*
 *
 * ResourcesPage reducer
 *
 */

import produce from 'immer';
import {
  GET_RESOURCES,
  GET_RESOURCES_SUCCESS,
  GET_RESOURCES_ERROR,
  GET_TRANSFORM_RESOURCES,
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
  }
}, initialState);

export default resourcesPageReducer;
