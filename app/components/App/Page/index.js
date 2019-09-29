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

export default function Page() {
  return (
    <>
      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>vulnerabilities and issues</PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>
    </>
  );
}
