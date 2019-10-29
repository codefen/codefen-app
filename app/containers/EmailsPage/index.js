/**
 *
 * EmailsPage
 *
 */

import React, { useEffect } from 'react';
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
import { getEmailsAction } from './actions';

const stateSelector = createStructuredSelector({
  emailsPage: makeSelectEmailsPage(),
});

export default function EmailsPage() {
  useInjectReducer({ key: 'emailsPage', reducer });
  useInjectSaga({ key: 'emailsPage', saga });

  const dispatch = useDispatch();
  const handleEmails = () => dispatch(getEmailsAction());

  useEffect(() => {
    handleEmails();
  }, []);

  /* eslint-disable no-unused-vars */
  const { emailsPage } = useSelector(stateSelector);
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
