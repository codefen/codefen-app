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
import IconWrapper from 'components/Icon';
import issueImage from 'images/header_issue.svg';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  PageHeader,
  PageHeaderImage,
  PageHeaderTypography,
  PageHeaderAction,
  PageHeaderIcon,
} from 'components/App/Page';
import TableWrapper from 'components/App/Table';
import { makeSelectIsLoading, makeSelectTransformEmails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getEmailsAction } from './actions';

export const emailsColumns = [
  {
    title: <IconWrapper type="mail" />,
    dataIndex: 'mail_icon',
    key: 'mail_icon',
    render: () => <IconWrapper type="mail" style={{ display: 'flex' }} />,
  },
  {
    title: <FormattedMessage {...messages.email_adresses} />,
    dataIndex: 'email_adresses',
    key: 'email_adresses',
    render: text => text || 'undefined',
  },
  {
    title: <FormattedMessage {...messages.reference} />,
    dataIndex: 'reference',
    key: 'reference',
    render: text => text || 'undefined',
  },
];

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  transformEmails: makeSelectTransformEmails(),
});

export default function EmailsPage() {
  useInjectReducer({ key: 'emailsPage', reducer });
  useInjectSaga({ key: 'emailsPage', saga });

  const { isLoading, transformEmails } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleEmails = () => dispatch(getEmailsAction());

  useEffect(() => {
    if (!transformEmails.length) handleEmails();
  }, [transformEmails]);

  return (
    <>
      <FormattedMessage {...messages.header}>
        {header => <Helmet title={header} />}
      </FormattedMessage>

      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>
          <FormattedMessage {...messages.emailAdresses} />
        </PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>

      <TableWrapper
        emails={emailsColumns}
        columns={emailsColumns}
        dataSource={!isLoading ? transformEmails : null}
      />
    </>
  );
}
