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

const makeSelectIsLogged = () =>
  createSelector(
    selectAppDomain,
    appState => appState.isLogged,
  );

const makeSelectIsDrawer = () =>
  createSelector(
    selectAppDomain,
    appState => appState.isDrawer,
  );

const makeSelectTransformCompaniesList = () =>
  createSelector(
    selectAppDomain,
    appState => appState.transformCompaniesList,
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
  makeSelectIsLogged,
  makeSelectUser,
  makeSelectCompany,
  makeSelectTransformCompaniesList,
};
