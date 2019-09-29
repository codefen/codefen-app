import React from 'react';
import Progress from 'components/App/Progress';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
    render: text => <a>{text}</a>,
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
  },
];
