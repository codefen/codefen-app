/**
 *
 * EmailsPage
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
import makeSelectEmailsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  emailsPage: makeSelectEmailsPage(),
});

function EmailsPage() {
  useInjectReducer({ key: 'emailsPage', reducer });
  useInjectSaga({ key: 'emailsPage', saga });

  /* eslint-disable no-unused-vars */
  const { emailsPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>EmailsPage</title>
        <meta name="description" content="Description of EmailsPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

EmailsPage.propTypes = {};

export default EmailsPage;
