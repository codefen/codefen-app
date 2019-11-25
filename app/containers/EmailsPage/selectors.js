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

const makeSelectSpecificallyCompanyId = () =>
  createSelector(
    selectEmailsPageDomain,
    emailsPageState => emailsPageState.specificallyCompanyId,
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

const makeSelectTransformSpecificallyEmails = () =>
  createSelector(
    selectEmailsPageDomain,
    emailsPageState => emailsPageState.transformSpecificallyEmails,
  );

export {
  makeSelectEmails,
  makeSelectSpecificallyCompanyId,
  makeSelectTransformEmails,
  makeSelectIsLoading,
  makeSelectTransformSpecificallyEmails,
  makeSelectError,
};
