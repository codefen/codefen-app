/**
 *
 * Page
 *
 */

import React from 'react';
import issueImage from 'images/header_issue.svg';
import {
  makeSelectTransformIssues,
  makeSelectIsLoading,
} from 'containers/IssuesPage/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import PageHeader from './PageHeader';
import PageHeaderImage from './PageHeaderImage';
import PageHeaderTypography from './PageHeaderTypography';
import PageHeaderAction from './PageHeaderAction';
import PageHeaderIcon from './PageHeaderIcon';
import { issuesColumns } from './PageTableColumns';
import TableWrapper from '../Table';
import PageFooter from './PageFooter';
import messages from './messages';

const stateSelector = createStructuredSelector({
  transformIssues: makeSelectTransformIssues(),
  isLoading: makeSelectIsLoading(),
});

export default function Page() {
  const { transformIssues, isLoading } = useSelector(stateSelector);

  return (
    <>
      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>vulnerabilities and issues</PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>

      <TableWrapper
        columns={issuesColumns}
        dataSource={!isLoading ? transformIssues : null}
      />

      <PageFooter>
        <FormattedMessage {...messages.pageFooter} />,
      </PageFooter>
    </>
  );
}
