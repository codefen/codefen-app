/**
 *
 * DetailPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectIssue, makeSelectPrepareIssueId } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getIssueAction } from './actions';

const stateSelector = createStructuredSelector({
  prepareIssueId: makeSelectPrepareIssueId(),
});

export default function DetailPage({ match }) {
  useInjectReducer({ key: 'detailPage', reducer });
  useInjectSaga({ key: 'detailPage', saga });

  const dispatch = useDispatch();
  const handleIssue = () => dispatch(getIssueAction(match.params.issueId));

  useEffect(() => {
    handleIssue();
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      issueId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
