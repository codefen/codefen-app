/*
 *
 * App actions
 *
 */

import { TOGGLE_SIDEBAR, TOGGLE_DRAWER, LOGOUT } from './constants';

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
