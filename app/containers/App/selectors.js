import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectRouter = state => state.router;

const selectAppDomain = state => state.app || initialState;

const makeSelectUser = () =>
  createSelector(
    selectAppDomain,
    appState => appState.user,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export { makeSelectLocation, makeSelectUser };
