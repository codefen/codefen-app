/**
 *
 * DetailPage
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import {
  DetailHeaderWrapper,
  DetailSubheaderWrapper,
  DetailSubheaderItemWrapper,
  DetailMainWrapper,
} from 'components/App/Detail';
import { makeSelectIssue, makeSelectSpecificallyIssue } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getIssueAction, getSpecificallyIssueAction } from './actions';

const stateSelector = createStructuredSelector({
  issue: makeSelectIssue(),
  specificallyIssue: makeSelectSpecificallyIssue(),
});

export default function DetailPage() {
  const { issueId, companyId } = useParams();
  const { issue, specificallyIssue } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleIssue = () => dispatch(getIssueAction(issueId));
  const handleSpecificallyIssue = () =>
    dispatch(getSpecificallyIssueAction(issueId, companyId));

  useInjectReducer({ key: 'detailPage', reducer });
  useInjectSaga({ key: 'detailPage', saga });
  useEffect(() => {
    if (!companyId) handleIssue();
    if (companyId) handleSpecificallyIssue();
  }, [companyId]);

  return (specificallyIssue && specificallyIssue[0]) || issue[0] ? (
    <>
      <header>
        <DetailHeaderWrapper>
          {(specificallyIssue && specificallyIssue[0].name) || issue[0].name}
        </DetailHeaderWrapper>
        <DetailSubheaderWrapper>
          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.researcher} /> @
            {(specificallyIssue && specificallyIssue[0].researcher_username) ||
              issue[0].researcher_username}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.published} />
            {(specificallyIssue && specificallyIssue[0].creacion) ||
              issue[0].creacion}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.company} /> @
            {(specificallyIssue && specificallyIssue[0].company_nickname) ||
              issue[0].company_nickname}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.status} />
            {(specificallyIssue && specificallyIssue[0].solved) ||
              issue[0].solved}
          </DetailSubheaderItemWrapper>

          <DetailSubheaderItemWrapper>
            <FormattedMessage {...messages.risk} />{' '}
            {(specificallyIssue && specificallyIssue[0].risk_level) ||
              issue[0].risk_level}
          </DetailSubheaderItemWrapper>
        </DetailSubheaderWrapper>
      </header>

      <DetailMainWrapper
        dangerouslySetInnerHTML={{
          __html:
            (specificallyIssue && specificallyIssue[0].issue) || issue[0].issue,
        }}
      />
    </>
  ) : null;
}
