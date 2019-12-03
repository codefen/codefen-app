/**
 *
 * ResourcesPage
 *
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import issueImage from 'images/header_issue.svg';
import { Icon } from 'antd';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import {
  makeSelectIsLoading,
  makeSelectTransformResources,
  makeSelectTransformSpecificallyResources,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getResourcesAction, getSpecificallyResourcesAction } from './actions';
import {
  PageHeader,
  PageHeaderImage,
  PageHeaderTypography,
  PageHeaderAction,
  PageHeaderIcon,
  ReferenceWrapper,
} from '../../components/App/Page';
import TableWrapper from '../../components/App/Table';

const resourcesColumns = [
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
  transformSpecificallyResources: makeSelectTransformSpecificallyResources(),
});

export default function ResourcesPage() {
  const { companyId } = useParams();
  const {
    isLoading,
    transformResources,
    transformSpecificallyResources,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleResources = () => dispatch(getResourcesAction());
  const handleSpecificallyResources = id =>
    dispatch(getSpecificallyResourcesAction(id));

  useInjectReducer({ key: 'resourcesPage', reducer });
  useInjectSaga({ key: 'resourcesPage', saga });
  useEffect(() => {
    if (!transformResources.length && !companyId) handleResources();
    if (companyId) handleSpecificallyResources(companyId);
  }, [transformResources, companyId]);

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
        dataSource={
          !isLoading
            ? transformSpecificallyResources || transformResources
            : null
        }
      />
    </>
  );
}
