import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the resourcesPage state domain
 */

const selectResourcesPageDomain = state => state.resourcesPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResourcesPage
 */

const makeSelectResources = () =>
  createSelector(
    selectResourcesPageDomain,
    resourcesPageState => resourcesPageState.resources,
  );

const makeSelectTransformResources = () =>
  createSelector(
    selectResourcesPageDomain,
    resourcesPageState => resourcesPageState.transformResources,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectResourcesPageDomain,
    resourcesPageState => resourcesPageState.isLoading,
  );

const makeSelectError = () =>
  createSelector(
    selectResourcesPageDomain,
    resourcesPageState => resourcesPageState.error,
  );

const makeSelectSpecificallyCompanyId = () =>
  createSelector(
    selectResourcesPageDomain,
    resourcesPageState => resourcesPageState.specificallyCompanyId,
  );

const makeSelectTransformSpecificallyResources = () =>
  createSelector(
    selectResourcesPageDomain,
    resourcesPageState => resourcesPageState.transformSpecificallyResources,
  );

export {
  makeSelectResources,
  makeSelectSpecificallyCompanyId,
  makeSelectTransformResources,
  makeSelectTransformSpecificallyResources,
  makeSelectIsLoading,
  makeSelectError,
};
