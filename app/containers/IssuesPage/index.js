/**
 *
 * IssuesPage
 *
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Progress from 'components/App/Progress';
import { Helmet } from 'react-helmet-async';
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
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import issueImage from 'images/header_issue.svg';
import { ISSUES, COMPANIES_LIST } from 'routes';
import messages from './messages';
import {
  makeSelectIsLoading,
  makeSelectError,
  makeSelectTransformIssues,
  makeSelectTransformSpecificallyIssues,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getIssuesAction, getSpecificallyIssuesAction } from './actions';
import TableWrapper from '../../components/App/Table';
import LinkWrapper from '../../components/App/Link';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
  transformIssues: makeSelectTransformIssues(),
  transformSpecificallyIssues: makeSelectTransformSpecificallyIssues(),
});

export default function IssuesPage() {
  const {
    isLoading,
    transformIssues,
    transformSpecificallyIssues,
  } = useSelector(stateSelector);
  const { companyId } = useParams();
  const dispatch = useDispatch();
  const handleIssues = () => dispatch(getIssuesAction());
  const handleSpecificallyIssues = id =>
    dispatch(getSpecificallyIssuesAction(id));
  const issuesColumns = [
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
      render: (text, record) => (
        <LinkWrapper
          to={
            transformSpecificallyIssues
              ? `/${COMPANIES_LIST}/${record.company_id}/${ISSUES}/${record.key}`
              : `/${ISSUES}/${record.key}`
          }
        >
          {text}
        </LinkWrapper>
      ),
    },
    {
      title: <FormattedMessage {...messages.status} />,
      dataIndex: 'status',
      key: 'status',
      render: text => text || 'undefined',
    },
    {
      title: <FormattedMessage {...messages.researcher} />,
      dataIndex: 'researcher',
      key: 'researcher',
      render: text => (
        <ResearcherWrapper>{text || 'undefined'}</ResearcherWrapper>
      ),
    },
  ];

  useInjectReducer({ key: 'issuesPage', reducer });
  useInjectSaga({ key: 'issuesPage', saga });
  useEffect(() => {
    if (!transformIssues.length && !companyId) handleIssues();
    if (companyId) handleSpecificallyIssues(companyId);
  }, [transformIssues, companyId]);

  return (
    <>
      <FormattedMessage {...messages.header}>
        {header => <Helmet title={header} />}
      </FormattedMessage>

      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>
          <FormattedMessage {...messages.vulnerabilitiesAndIsues} />
        </PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>

      <TableWrapper
        issues={issuesColumns}
        columns={issuesColumns}
        dataSource={
          !isLoading ? transformSpecificallyIssues || transformIssues : null
        }
      />

      <PageFooter>
        <FormattedMessage {...messages.pageFooter} />
      </PageFooter>
    </>
  );
}
