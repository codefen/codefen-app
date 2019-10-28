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

const makeSelectResourcesPage = () =>
  createSelector(
    selectResourcesPageDomain,
    substate => substate,
  );

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

export default makeSelectResourcesPage;
export {
  makeSelectResources,
  makeSelectTransformResources,
  makeSelectIsLoading,
  makeSelectError,
};