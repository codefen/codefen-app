import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectEmail = () =>
  createSelector(
    selectLoginPageDomain,
    loginPageState => loginPageState.email,
  );

const makeSelectPassword = () =>
  createSelector(
    selectLoginPageDomain,
    loginPageState => loginPageState.password,
  );

const makeSelectError = () =>
  createSelector(
    selectLoginPageDomain,
    loginPageState => loginPageState.error,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectLoginPageDomain,
    loginPageState => loginPageState.isLoading,
  );

export {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectError,
  makeSelectIsLoading,
};
