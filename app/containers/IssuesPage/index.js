/**
 *
 * IssuesPage
 *
 */

import React, { useEffect } from 'react';

import Progress from 'components/App/Progress';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  PageHeader,
  PageHeaderImage,
  PageHeaderTypography,
  PageHeaderAction,
  PageHeaderIcon,
  PageFooter,
  ResearcherWrapper,
} from 'components/App/Page';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import issueImage from 'images/header_issue.svg';
import messages from './messages';
import {
  makeSelectIsLoading,
  makeSelectError,
  makeSelectTransformIssues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getIssuesAction } from './actions';
import TableWrapper from '../../components/App/Table';

export const issuesColumns = [
  {
    title: <FormattedMessage {...messages.relevance} />,
    dataIndex: 'relevance',
    key: 'relevance',
    render: percent => <Progress percent={percent} showInfo={false} />,
  },
  {
    title: <FormattedMessage {...messages.issue} />,
    dataIndex: 'issue',
    key: 'issue',
  },
  {
    title: <FormattedMessage {...messages.status} />,
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: <FormattedMessage {...messages.researcher} />,
    dataIndex: 'researcher',
    key: 'researcher',
    render: text => <ResearcherWrapper>{text}</ResearcherWrapper>,
  },
];

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
  transformIssues: makeSelectTransformIssues(),
});

export default function IssuesPage() {
  useInjectReducer({ key: 'issuesPage', reducer });
  useInjectSaga({ key: 'issuesPage', saga });

  const { isLoading, transformIssues } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleIssues = () => dispatch(getIssuesAction());

  useEffect(() => {
    if (!transformIssues.length) handleIssues();
  }, [transformIssues]);

  return (
    <>
      <Helmet>
        <title>issues - codefen.com</title>
        <meta name="description" content="Description of Issues" />
      </Helmet>

      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>vulnerabilities and issues</PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>

      <TableWrapper
        issues={issuesColumns}
        columns={issuesColumns}
        dataSource={!isLoading ? transformIssues : null}
      />

      <PageFooter>
        <FormattedMessage {...messages.pageFooter} />,
      </PageFooter>
    </>
  );
}
