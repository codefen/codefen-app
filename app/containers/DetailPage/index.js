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

export default function DetailPage({ match }) {
  useInjectReducer({ key: 'detailPage', reducer });
  useInjectSaga({ key: 'detailPage', saga });

  const { issue, specificallyIssue } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleIssue = () => dispatch(getIssueAction(match.params.issueId));
  const handleSpecificallyIssue = () =>
    dispatch(
      getSpecificallyIssueAction(match.params.issueId, match.params.companyId),
    );

  useEffect(() => {
    if (!match.params.companyId) handleIssue();
    if (match.params.companyId) handleSpecificallyIssue();
  }, [match.params.companyId]);

  return (
    <>
      {(specificallyIssue && specificallyIssue[0]) || (issue && issue[0]) ? (
        <>
          <header>
            <DetailHeaderWrapper>
              {specificallyIssue[0].name || issue[0].name}
            </DetailHeaderWrapper>
            <DetailSubheaderWrapper>
              <DetailSubheaderItemWrapper>
                <FormattedMessage {...messages.researcher} /> @
                {specificallyIssue[0].researcher_username ||
                  issue[0].researcher_username}
              </DetailSubheaderItemWrapper>

              <DetailSubheaderItemWrapper>
                <FormattedMessage {...messages.published} />
                {specificallyIssue[0].creacion || issue[0].creacion}
              </DetailSubheaderItemWrapper>

              <DetailSubheaderItemWrapper>
                <FormattedMessage {...messages.company} /> @
                {specificallyIssue[0].company_nickname ||
                  issue[0].company_nickname}
              </DetailSubheaderItemWrapper>

              <DetailSubheaderItemWrapper>
                <FormattedMessage {...messages.status} />
                {specificallyIssue[0].solved || issue[0].solved}
              </DetailSubheaderItemWrapper>

              <DetailSubheaderItemWrapper>
                <FormattedMessage {...messages.risk} />{' '}
                {specificallyIssue[0].risk_level || issue[0].risk_level}
              </DetailSubheaderItemWrapper>
            </DetailSubheaderWrapper>
          </header>

          <DetailMainWrapper
            dangerouslySetInnerHTML={{
              __html: specificallyIssue[0].issue || issue[0].issue,
            }}
          />
        </>
      ) : null}
    </>
  );
}

DetailPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      issueId: PropTypes.node,
      companyId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
