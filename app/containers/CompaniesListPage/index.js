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

import { checkAdminLoggedAction } from 'containers/App/actions';
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
import {
  CompanyNameWrapper,
  CompanyImageWrapper,
  CompanyTableWrapper,
  CompanyLogoWrapper,
} from '../../components/App/Company';

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
  const handleAdminLogged = () => dispatch(checkAdminLoggedAction());

  const companiesListColumns = [
    {
      title: 'profile_media',
      dataIndex: 'profile_media',
      key: 'profile_media',
      render: text => (
        <CompanyLogoWrapper
          tablet
          src={`https://codefen.com/main/media/profiles/${text}`}
        />
      ),
    },
    {
      title: <FormattedMessage {...messages.name} />,
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <CompanyTableWrapper name="true">
          <CompanyLogoWrapper
            mobile
            src={`https://codefen.com/main/media/profiles/${transformCompaniesList[record.key - 1].profile_media}`}
          />
          <div>
            <CompanyNameWrapper header>{text}</CompanyNameWrapper>
            <div>{transformCompaniesList[record.key - 1].small_desc}</div>
          </div>
        </CompanyTableWrapper>
      ),
    },
    {
      title: <FormattedMessage {...messages.issuesOpened} />,
      dataIndex: 'issues_open',
      key: 'issues_open',
      render: text => (
        <CompanyTableWrapper>
          <CompanyImageWrapper src={issueImage} />
          <CompanyNameWrapper>{text}</CompanyNameWrapper>
        </CompanyTableWrapper>
      ),
    },
    {
      title: <FormattedMessage {...messages.issuesSolved} />,
      dataIndex: 'issues_solved',
      key: 'issues_solved',
      render: text => (
        <CompanyTableWrapper issues>
          <CompanyImageWrapper src={greyImage} />
          <div>{text}</div>
        </CompanyTableWrapper>
      ),
    },
    {
      title: <FormattedMessage {...messages.creation} />,
      dataIndex: 'creacion',
      key: 'creacion',
    },
    {
      title: <FormattedMessage {...messages.plan} />,
      dataIndex: 'plan',
      key: 'plan',
    },
  ];

  useEffect(() => {
    handleAdminLogged();
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
        companiesList={companiesListColumns}
        columns={companiesListColumns}
        dataSource={!isLoading ? transformCompaniesList : null}
      />
    </>
  );
}
