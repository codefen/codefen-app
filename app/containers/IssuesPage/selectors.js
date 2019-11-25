import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the issuesPage state domain
 */

const selectIssuesPageDomain = state => state.issuesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by IssuesPage
 */

const makeSelectIssues = () =>
  createSelector(
    selectIssuesPageDomain,
    issuesPageState => issuesPageState.issues,
  );

const makeSelectSpecificallyCompanyId = () =>
  createSelector(
    selectIssuesPageDomain,
    issuesPageState => issuesPageState.specificallyCompanyId,
  );

const makeSelectTransformIssues = () =>
  createSelector(
    selectIssuesPageDomain,
    issuesPageState => issuesPageState.transformIssues,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectIssuesPageDomain,
    issuesPageState => issuesPageState.isLoading,
  );

const makeSelectError = () =>
  createSelector(
    selectIssuesPageDomain,
    issuesPageState => issuesPageState.error,
  );

const makeSelectTransformSpecificallyIssues = () =>
  createSelector(
    selectIssuesPageDomain,
    issuesPageState => issuesPageState.transformSpecificallyIssues,
  );

export {
  makeSelectIssues,
  makeSelectSpecificallyCompanyId,
  makeSelectTransformIssues,
  makeSelectTransformSpecificallyIssues,
  makeSelectIsLoading,
  makeSelectError,
};
