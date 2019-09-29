/*
 *
 * App actions
 *
 */

import { TOGGLE_SIDEBAR, TOGGLE_DRAWER } from './constants';

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
