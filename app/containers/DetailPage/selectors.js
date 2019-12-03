import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the detailPage state domain
 */

const selectDetailPageDomain = state => state.detailPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DetailPage
 */

const makeSelectIssue = () =>
  createSelector(
    selectDetailPageDomain,
    detailPageState => detailPageState.issue,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectDetailPageDomain,
    detailPageState => detailPageState.isLoading,
  );

const makeSelectError = () =>
  createSelector(
    selectDetailPageDomain,
    detailPageState => detailPageState.error,
  );

const makeSelectPrepareIssueId = () =>
  createSelector(
    selectDetailPageDomain,
    detailPageState => detailPageState.prepareIssueId,
  );

const makeSelectSpecificallyCompanyId = () =>
  createSelector(
    selectDetailPageDomain,
    detailPageState => detailPageState.specificallyCompanyId,
  );

const makeSelectSpecificallyIssue = () =>
  createSelector(
    selectDetailPageDomain,
    detailPageState => detailPageState.specificallyIssue,
  );

export {
  makeSelectIssue,
  makeSelectIsLoading,
  makeSelectError,
  makeSelectPrepareIssueId,
  makeSelectSpecificallyCompanyId,
  makeSelectSpecificallyIssue,
};
