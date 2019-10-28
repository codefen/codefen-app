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

const makeSelectEmailsPage = () =>
  createSelector(
    selectEmailsPageDomain,
    substate => substate,
  );

export default makeSelectEmailsPage;
export { selectEmailsPageDomain };
