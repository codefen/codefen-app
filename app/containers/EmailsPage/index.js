/**
 *
 * EmailsPage
 *
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import IconWrapper from 'components/Icon';
import issueImage from 'images/header_issue.svg';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import {
  PageHeader,
  PageHeaderImage,
  PageHeaderTypography,
  PageHeaderAction,
  PageHeaderIcon,
} from 'components/App/Page';
import TableWrapper from 'components/App/Table';
import {
  makeSelectIsLoading,
  makeSelectTransformEmails,
  makeSelectTransformSpecificallyEmails,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getEmailsAction, getSpecificallyEmailsAction } from './actions';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  transformEmails: makeSelectTransformEmails(),
  transformSpecificallyEmails: makeSelectTransformSpecificallyEmails(),
});

const emailsColumns = [
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

export default function EmailsPage() {
  const { companyId } = useParams();
  const {
    isLoading,
    transformEmails,
    transformSpecificallyEmails,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleEmails = () => dispatch(getEmailsAction());
  const handleSpecificallyEmails = id =>
    dispatch(getSpecificallyEmailsAction(id));

  useInjectReducer({ key: 'emailsPage', reducer });
  useInjectSaga({ key: 'emailsPage', saga });
  useEffect(() => {
    if (!transformEmails.length && !companyId) handleEmails();
    if (companyId) handleSpecificallyEmails(companyId);
  }, [transformEmails, companyId]);

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
        dataSource={
          !isLoading ? transformSpecificallyEmails || transformEmails : null
        }
      />
    </>
  );
}
