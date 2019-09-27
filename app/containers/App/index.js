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
import reducer from 'containers/App/reducer';

import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import IssuesPage from 'containers/IssuesPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Layout from 'components/App/Layout';

import 'antd/dist/antd.css';
import GlobalStyle from '../../global-styles';

export default function App() {
  useInjectReducer({ key: 'app', reducer });

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Layout>
          <Switch>
            <Route path="/issues" component={IssuesPage} />
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </Layout>

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
