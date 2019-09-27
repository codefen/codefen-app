/*
 *
 * App actions
 *
 */

import { TOGGLE_SIDEBAR } from './constants';

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
