/**
 *
 * IssuesPage
 *
 */

import React from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Footer, Sider } = Layout;
const { SubMenu } = Menu;
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectIssuesPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';

const stateSelector = createStructuredSelector({
  issuesPage: makeSelectIssuesPage(),
});

function IssuesPage() {
  useInjectReducer({ key: 'issuesPage', reducer });
  useInjectSaga({ key: 'issuesPage', saga });

  /* eslint-disable no-unused-vars */
  const { issuesPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <>
      <Helmet>
        <title>IssuesPage - codefen.com</title>
        <meta name="description" content="Description of IssuesPage" />
      </Helmet>

      <div>test</div>
    </>
  );
}

IssuesPage.propTypes = {};

export default IssuesPage;
