import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the emailsPage state domain
 */

const selectEmailsPageDomain = state => state.emailsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmailsPage
 */

const makeSelectEmails = () =>
  createSelector(
    selectEmailsPageDomain,
    emailsPageState => emailsPageState.emails,
  );

const makeSelectTransformEmails = () =>
  createSelector(
    selectEmailsPageDomain,
    emailsPageState => emailsPageState.transformEmails,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectEmailsPageDomain,
    emailsPageState => emailsPageState.isLoading,
  );

const makeSelectError = () =>
  createSelector(
    selectEmailsPageDomain,
    emailsPageState => emailsPageState.error,
  );

export {
  makeSelectEmails,
  makeSelectTransformEmails,
  makeSelectIsLoading,
  makeSelectError,
};
