/**
 *
 * ResourcesPage
 *
 */

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectResourcesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getResourcesAction } from './actions';

const stateSelector = createStructuredSelector({
  resourcesPage: makeSelectResourcesPage(),
});

export default function ResourcesPage() {
  useInjectReducer({ key: 'resourcesPage', reducer });
  useInjectSaga({ key: 'resourcesPage', saga });

  /* eslint-disable no-unused-vars */
  const { resourcesPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleResources = () => dispatch(getResourcesAction());

  useEffect(() => {
    handleResources();
  }, []);
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>ResourcesPage</title>
        <meta name="description" content="Description of ResourcesPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}
