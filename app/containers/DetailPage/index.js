/**
 *
 * DetailPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  DetailHeaderWrapper,
  DetailSubheaderWrapper,
  DetailSubheaderItemWrapper,
  DetailMainWrapper,
} from 'components/App/Detail';
import { makeSelectIssue } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getIssueAction } from './actions';

const stateSelector = createStructuredSelector({
  issue: makeSelectIssue(),
});

export default function DetailPage({ match }) {
  useInjectReducer({ key: 'detailPage', reducer });
  useInjectSaga({ key: 'detailPage', saga });

  const { issue } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleIssue = () => dispatch(getIssueAction(match.params.issueId));

  useEffect(() => {
    handleIssue();
  }, []);

  return issue[0] ? (
    <>
      <header>
        <DetailHeaderWrapper>{issue[0].name}</DetailHeaderWrapper>
        <DetailSubheaderWrapper>
          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.researcher} /> @
            {issue[0].researcher_username}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.published} /> {issue[0].creacion}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.company} /> @
            {issue[0].company_nickname}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.status} /> {issue[0].solved}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.risk} /> {issue[0].risk_level}
          </DetailSubheaderItemWrapper>
        </DetailSubheaderWrapper>
      </header>

      <DetailMainWrapper dangerouslySetInnerHTML={{ __html: issue[0].issue }} />
    </>
  ) : null;
}

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      issueId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
