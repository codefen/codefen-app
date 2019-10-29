/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { LOGIN_SUCCESS } from 'containers/LoginPage/constants';
import { GET_ISSUES_SUCCESS } from 'containers/IssuesPage/constants';
import { TOGGLE_SIDEBAR, TOGGLE_DRAWER, LOGOUT } from './constants';

export const initialState = {
  isLogged: false,
  isCollapsed: false,
  isDrawer: false,
  session: '',
  user: {
    id: '',
    role: '',
    email: '',
    username: '',
    password: '',
    balance: '',
    company_id: '',
    area_code: '',
    phone_number: '',
    mfa_recover: '',
    condicion: '',
    eliminado: '',
    creacion: '',
  },
  company: {
    id: '',
    name: '',
    main_resource: '',
    nickname: '',
    small_desc: '',
    issues_solved: '',
    issues_open: '',
    plan: '',
    address_pais: '',
    address_provincia: '',
    address_ciudad: '',
    address_self: '',
    profile_media: '',
    eliminado: '',
    creacion: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGOUT:
      draft.isLogged = false;
      draft.isCollapsed = false;
      draft.isDrawer = false;
      draft.company = initialState.company;
      draft.user = initialState.user;
      draft.session = initialState.session;
      break;
    case LOGIN_SUCCESS:
      draft.session = action.session;
      draft.user = action.user;
      draft.isLogged = true;
      break;
    case GET_ISSUES_SUCCESS:
      draft.company = action.company;
      break;
    case TOGGLE_SIDEBAR:
      draft.isCollapsed = !draft.isCollapsed;
      break;
    case TOGGLE_DRAWER:
      draft.isDrawer = !draft.isDrawer;
      break;
    case LOCATION_CHANGE:
      if (draft.isDrawer) draft.isDrawer = !draft.isDrawer;
      break;
  }
}, initialState);

export default appReducer;
