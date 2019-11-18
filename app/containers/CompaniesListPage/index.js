/**
 *
 * CompaniesListPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCompaniesListPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  companiesListPage: makeSelectCompaniesListPage(),
});

function CompaniesListPage() {
  useInjectReducer({ key: 'companiesListPage', reducer });
  useInjectSaga({ key: 'companiesListPage', saga });

  /* eslint-disable no-unused-vars */
  const { companiesListPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

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
