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
    render: () => <IconWrapper type="mail" />,
  },
  {
    title: <FormattedMessage {...messages.email_adresses} />,
    dataIndex: 'email_adresses',
    key: 'email_adresses',
  },
  {
    title: <FormattedMessage {...messages.reference} />,
    dataIndex: 'reference',
    key: 'reference',
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
    handleEmails();
  }, []);

  return (
    <>
      <Helmet>
        <title>email adresses - codefen.com</title>
        <meta name="description" content="Description of Email adresses" />
      </Helmet>

      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>email adresses</PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>

      <TableWrapper
        columns={emailsColumns}
        dataSource={!isLoading ? transformEmails : null}
      />
    </>
  );
}
