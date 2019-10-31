/**
 *
 * ResourcesPage
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import issueImage from 'images/header_issue.svg';
import { Icon } from 'antd';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectIsLoading, makeSelectTransformResources } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getResourcesAction } from './actions';
import {
  PageHeader,
  PageHeaderImage,
  PageHeaderTypography,
  PageHeaderAction,
  PageHeaderIcon,
  ReferenceWrapper,
} from '../../components/App/Page';
import TableWrapper from '../../components/App/Table';

export const resourcesColumns = [
  {
    title: <Icon type="global" />,
    dataIndex: 'global_icon',
    key: 'global_icon',
    render: () => <Icon type="global" style={{ display: 'flex' }} />,
  },
  {
    title: <FormattedMessage {...messages.main_server} />,
    dataIndex: 'main_server',
    key: 'main_server',
    render: text => text || 'undefined',
  },
  {
    title: <FormattedMessage {...messages.domain} />,
    dataIndex: 'domain',
    key: 'domain',
    render: text => text || 'undefined',
  },
  {
    title: <FormattedMessage {...messages.reference} />,
    dataIndex: 'reference',
    key: 'reference',
    render: text => (
      <ReferenceWrapper>
        <Icon type="home" /> {text || 'undefined'}
      </ReferenceWrapper>
    ),
  },
];

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  transformResources: makeSelectTransformResources(),
});

export default function ResourcesPage() {
  useInjectReducer({ key: 'resourcesPage', reducer });
  useInjectSaga({ key: 'resourcesPage', saga });

  const { isLoading, transformResources } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleResources = () => dispatch(getResourcesAction());

  useEffect(() => {
    if (!transformResources.length) handleResources();
  }, [transformResources]);

  return (
    <>
      <FormattedMessage {...messages.header}>
        {header => <Helmet title={header} />}
      </FormattedMessage>

      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>
          <FormattedMessage {...messages.scopeAndResources} />
        </PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>

      <TableWrapper
        resources={resourcesColumns}
        columns={resourcesColumns}
        dataSource={!isLoading ? transformResources : null}
      />
    </>
  );
}
