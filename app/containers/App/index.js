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
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

// Import Utils
import reducer from 'containers/App/reducer';
import saga from 'containers/App/saga';
import {
  HOME,
  COMPANIES_LIST,
  LOGIN,
  ISSUES,
  RESOURCES,
  EMAIL_ADRESSES,
  NOT_FOUND,
} from 'routes';
import { hot } from 'react-hot-loader/root';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import CompaniesListPage from 'containers/CompaniesListPage/Loadable';
import IssuesPage from 'containers/IssuesPage/Loadable';
import ResourcesPage from 'containers/ResourcesPage/Loadable';
import EmailsPage from 'containers/EmailsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DetailPage from 'containers/DetailPage/Loadable';
import Layout from 'components/App/Layout';

import 'antd/dist/antd.css';
import GlobalStyle from 'global-styles';

function App() {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <Switch>
        <Route exact path={`/${HOME}`} component={HomePage} />
        <Route exact path={`/${LOGIN}`} component={LoginPage} />
        <Layout>
          <Switch>
            <Route
              exact
              path={`/${COMPANIES_LIST}`}
              component={CompaniesListPage}
            />
            <Route
              exact
              path={`/${COMPANIES_LIST}/:companyId/${ISSUES}`}
              component={IssuesPage}
            />
            <Route
              path={`/${COMPANIES_LIST}/:companyId/${ISSUES}/:issueId`}
              component={DetailPage}
            />
            <Route
              path={`/${COMPANIES_LIST}/:companyId/${RESOURCES}`}
              component={ResourcesPage}
            />
            <Route
              path={`/${COMPANIES_LIST}/:companyId/${EMAIL_ADRESSES}`}
              component={EmailsPage}
            />

            <Route exact path={`/${ISSUES}`} component={IssuesPage} />
            <Route path={`/${ISSUES}/:issueId`} component={DetailPage} />
            <Route exact path={`/${RESOURCES}`} component={ResourcesPage} />
            <Route exact path={`/${EMAIL_ADRESSES}`} component={EmailsPage} />
            <Route render={() => <Redirect to={`/${NOT_FOUND}`} />} />
          </Switch>
        </Layout>

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default hot(App);
