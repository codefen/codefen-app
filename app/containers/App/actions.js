/*
 *
 * App actions
 *
 */

import {
  TOGGLE_SIDEBAR,
  TOGGLE_DRAWER,
  LOGOUT,
  CHECK_USER_LOGGED,
  CHECK_ADMIN_LOGGED,
} from './constants';

/**
 * Check User is Logged
 *
 * @return {object} An action object with a type of CHECK_USER_LOGGED
 */
export function checkUserLoggedAction() {
  return {
    type: CHECK_USER_LOGGED,
  };
}

/**
 * Check Admin is Logged
 *
 * @return {object} An action object with a type of CHECK_ADMIN_LOGGED
 */
export function checkAdminLoggedAction() {
  return {
    type: CHECK_ADMIN_LOGGED,
  };
}

/**
 * Toggle Sidebar
 *
 * @return {object} An action object with a type of TOGGLE_SIDEBAR
 */
export function toggleSidebarAction() {
  return {
    type: TOGGLE_SIDEBAR,
  };
}

/**
 * Toggle Drawer
 *
 * @return {object} An action object with a type of TOGGLE_DRAWER
 */
export function toggleDrawerAction() {
  return {
    type: TOGGLE_DRAWER,
  };
}

/**
 * Logout, maybe this action will starts the request saga?
 *
 * @return {object} An action object with a type of LOGOUT
 */
export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
