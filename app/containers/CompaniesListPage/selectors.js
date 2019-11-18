import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the companiesListPage state domain
 */

const selectCompaniesListPageDomain = state =>
  state.companiesListPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CompaniesListPage
 */

const makeSelectCompaniesListPage = () =>
  createSelector(
    selectCompaniesListPageDomain,
    substate => substate,
  );

export default makeSelectCompaniesListPage;
export { selectCompaniesListPageDomain };
