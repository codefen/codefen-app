/**
 *
 * Page
 *
 */

import React from 'react';
import PageHeader from './PageHeader';
import issueImage from 'images/header_issue.svg';
import PageHeaderImage from './PageHeaderImage';
import PageHeaderTypography from './PageHeaderTypography';
import PageHeaderAction from './PageHeaderAction';
import PageHeaderIcon from './PageHeaderIcon';
import { Table } from 'antd';
import { issuesColumns } from './PageTableColumns';
import {
  makeSelectTransformIssues,
  makeSelectIsLoading,
} from 'containers/IssuesPage/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

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

      {!isLoading && (
        <Table columns={issuesColumns} dataSource={transformIssues} />
      )}
    </>
  );
}
