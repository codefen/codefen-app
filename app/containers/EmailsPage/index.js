/**
 *
 * EmailsPage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
import {
  makeSelectIsLoading,
  makeSelectTransformEmails,
  makeSelectTransformSpecificallyEmails,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getEmailsAction, getSpecificallyEmailsAction } from './actions';

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
  transformSpecificallyEmails: makeSelectTransformSpecificallyEmails(),
});

export default function EmailsPage({ match }) {
  useInjectReducer({ key: 'emailsPage', reducer });
  useInjectSaga({ key: 'emailsPage', saga });

  const { params } = match;
  const {
    isLoading,
    transformEmails,
    transformSpecificallyEmails,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleEmails = () => dispatch(getEmailsAction());
  const handleSpecificallyEmails = companyId =>
    dispatch(getSpecificallyEmailsAction(companyId));

  useEffect(() => {
    if (!transformEmails.length && !params.companyId) handleEmails();
    if (params.companyId) handleSpecificallyEmails(params.companyId);
  }, [transformEmails, params.companyId]);

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

EmailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      companyId: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
