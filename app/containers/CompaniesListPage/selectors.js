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

const makeSelectCompaniesList = () =>
  createSelector(
    selectCompaniesListPageDomain,
    companiesListPageState => companiesListPageState.companiesList,
  );

const makeSelectTransformCompaniesList = () =>
  createSelector(
    selectCompaniesListPageDomain,
    companiesListPageState => companiesListPageState.transformCompaniesList,
  );

const makeSelectError = () =>
  createSelector(
    selectCompaniesListPageDomain,
    companiesListPageState => companiesListPageState.error,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectCompaniesListPageDomain,
    companiesListPageState => companiesListPageState.isLoading,
  );

export {
  makeSelectCompaniesList,
  makeSelectTransformCompaniesList,
  makeSelectError,
  makeSelectIsLoading,
};
