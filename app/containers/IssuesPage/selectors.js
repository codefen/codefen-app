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

const makeSelectIssuesPage = () =>
  createSelector(
    selectIssuesPageDomain,
    substate => substate,
  );

export default makeSelectIssuesPage;
export { selectIssuesPageDomain };
