/**
 *
 * CompaniesListPage
 *
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  PageHeader,
  PageHeaderImage,
  PageHeaderTypography,
  PageHeaderAction,
  PageHeaderIcon,
  PageFooter,
  ResearcherWrapper,
} from 'components/App/Page';
import issueImage from 'images/header_issue.svg';
import greyImage from 'images/grey_issue.svg';

import {
  makeSelectCompaniesList,
  makeSelectError,
  makeSelectIsLoading,
  makeSelectTransformCompaniesList,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getCompaniesListAction } from './actions';
import TableWrapper from '../../components/App/Table';

const stateSelector = createStructuredSelector({
  companiesList: makeSelectCompaniesList(),
  transformCompaniesList: makeSelectTransformCompaniesList(),
  isLoading: makeSelectIsLoading(),
});

export default function CompaniesListPage() {
  useInjectReducer({ key: 'companiesListPage', reducer });
  useInjectSaga({ key: 'companiesListPage', saga });

  const { transformCompaniesList, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleCompaniesList = () => dispatch(getCompaniesListAction());

  const companiesListColumns = [
    {
      title: 'profile_media',
      dataIndex: 'profile_media',
      key: 'profile_media',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div>
          <div>{text}</div>
          <div>{transformCompaniesList[record.key - 1].small_desc}</div>
        </div>
      ),
    },
    {
      title: 'issues_open',
      dataIndex: 'issues_open',
      key: 'issues_open',
      render: text => (
        <div>
          <PageHeaderImage src={issueImage} />
          <div>{text}</div>
        </div>
      ),
    },
    {
      title: 'issues_solved',
      dataIndex: 'issues_solved',
      key: 'issues_solved',
      render: text => (
        <div>
          <PageHeaderImage src={greyImage} />
          <div>{text}</div>
        </div>
      ),
    },
    {
      title: 'creacion',
      dataIndex: 'creacion',
      key: 'creacion',
    },
    {
      title: 'plan',
      dataIndex: 'plan',
      key: 'plan',
    },
  ];

  useEffect(() => {
    if (!transformCompaniesList.length) handleCompaniesList();
  }, [transformCompaniesList]);

  return (
    <>
      <FormattedMessage {...messages.header}>
        {header => <Helmet title={header} />}
      </FormattedMessage>

      <PageHeader>
        <PageHeaderImage src={issueImage} />
        <PageHeaderTypography>
          <FormattedMessage {...messages.companiesList} />
        </PageHeaderTypography>
        <PageHeaderAction>
          <PageHeaderIcon type="plus-circle" theme="filled" />
        </PageHeaderAction>
      </PageHeader>

      <TableWrapper
        columns={companiesListColumns}
        dataSource={!isLoading ? transformCompaniesList : null}
      />
    </>
  );
}
