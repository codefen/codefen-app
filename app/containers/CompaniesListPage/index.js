/**
 *
 * CompaniesListPage
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectCompaniesList,
  makeSelectError,
  makeSelectIsLoading,
} from './selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCompaniesListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getCompaniesListAction } from './actions';

const stateSelector = createStructuredSelector({
  companiesList: makeSelectCompaniesList(),
  isLoading: makeSelectIsLoading(),
});

function CompaniesListPage() {
  useInjectReducer({ key: 'companiesListPage', reducer });
  useInjectSaga({ key: 'companiesListPage', saga });

  const { companiesList, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const handleCompaniesList = () => dispatch(getCompaniesListAction());

  useEffect(() => {
    if (!companiesList.length) handleCompaniesList();
  }, [companiesList]);

  return (
    <div>
      <Helmet>
        <title>CompaniesListPage</title>
        <meta name="description" content="Description of CompaniesListPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CompaniesListPage.propTypes = {};

export default CompaniesListPage;
