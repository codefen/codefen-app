/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Import Utils
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from 'containers/App/reducer';
import saga from 'containers/App/saga';
import {
  HOME,
  LOGIN,
  ISSUES,
  RESOURCES,
  EMAIL_ADRESSES,
  NOT_FOUND,
} from 'routes';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import IssuesPage from 'containers/IssuesPage/Loadable';
import ResourcesPage from 'containers/ResourcesPage/Loadable';
import EmailsPage from 'containers/EmailsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Layout from 'components/App/Layout';

import 'antd/dist/antd.css';
import GlobalStyle from '../../global-styles';

export default function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <Switch>
        <Route exact path={HOME} component={HomePage} />
        <Route path={LOGIN} component={LoginPage} />
        <Layout>
          <Switch>
            <Route path={ISSUES} component={IssuesPage} />
            <Route path={RESOURCES} component={ResourcesPage} />
            <Route path={EMAIL_ADRESSES} component={EmailsPage} />
            <Route render={() => <Redirect to={NOT_FOUND} />} />
          </Switch>
        </Layout>

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
