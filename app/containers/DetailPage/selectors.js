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

const makeSelectDetailPage = () =>
  createSelector(
    selectDetailPageDomain,
    substate => substate,
  );

export default makeSelectDetailPage;
export { selectDetailPageDomain };
