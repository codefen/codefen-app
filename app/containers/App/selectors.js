import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectRouter = state => state.router;

const selectAppDomain = state => state.app || initialState;

const makeSelectSession = () =>
  createSelector(
    selectAppDomain,
    appState => appState.session,
  );

const makeSelectUser = () =>
  createSelector(
    selectAppDomain,
    appState => appState.user,
  );

const makeSelectCompany = () =>
  createSelector(
    selectAppDomain,
    appState => appState.company,
  );

const makeSelectIsCollapsed = () =>
  createSelector(
    selectAppDomain,
    appState => appState.isCollapsed,
  );

const makeSelectIsDrawer = () =>
  createSelector(
    selectAppDomain,
    appState => appState.isDrawer,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  makeSelectLocation,
  makeSelectSession,
  makeSelectIsCollapsed,
  makeSelectIsDrawer,
  makeSelectUser,
  makeSelectCompany,
};
