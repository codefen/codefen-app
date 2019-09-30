/**
 *
 * IssuesPage
 *
 */

import React, { useEffect } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectIssues,
  makeSelectIsLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import { getIssuesAction } from './actions';
import Page from 'components/App/Page';

const { Footer, Sider } = Layout;
const { SubMenu } = Menu;

const stateSelector = createStructuredSelector({
  issues: makeSelectIssues(),
  isLoading: makeSelectIsLoading(),
  error: makeSelectError(),
});

export default function IssuesPage() {
  useInjectReducer({ key: 'issuesPage', reducer });
  useInjectSaga({ key: 'issuesPage', saga });

  const { issues, isLoading, error } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleIssues = () => dispatch(getIssuesAction());

  useEffect(() => {
    handleIssues();
  }, []);

  return (
    <>
      <Helmet>
        <title>IssuesPage - codefen.com</title>
        <meta name="description" content="Description of IssuesPage" />
      </Helmet>

      <Page />
    </>
  );
}
