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
import makeSelectCompaniesListPage, {
  makeSelectCompaniesList,
  makeSelectError,
  makeSelectIsLoading,
} from './selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getCompaniesListAction } from './actions';
import TableWrapper from '../../components/App/Table';

const stateSelector = createStructuredSelector({
  companiesList: makeSelectCompaniesList(),
  isLoading: makeSelectIsLoading(),
});

export const companiesColumns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    render: text => text || 'undefined',
  },
];

export default function CompaniesListPage() {
  useInjectReducer({ key: 'companiesListPage', reducer });
  useInjectSaga({ key: 'companiesListPage', saga });

  const { companiesList, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleCompaniesList = () => dispatch(getCompaniesListAction());

  useEffect(() => {
    handleCompaniesList();
  }, []);

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
        columns={companiesColumns}
        dataSource={isLoading ? companiesList : null}
      />
    </>
  );
}
