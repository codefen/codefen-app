/**
 *
 * Navigation
 *
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Menu from 'components/App/Menu';
import { logoutAction } from 'containers/App/actions';
import {
  makeSelectLocation,
  makeSelectUser,
  makeSelectTransformCompaniesList,
} from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { ISSUES, RESOURCES, EMAIL_ADRESSES, COMPANIES_LIST } from 'routes';
import issueImage from 'images/icon_issue.svg';
import NavLinkWrapper from '../../NavLink';
import messages from './messages';
import Icon from './NavigationIcon';
import NavigationCustomIcon from './NavigationCustomIcon';
const { SubMenu } = Menu;

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
  user: makeSelectUser(),
  transformCompaniesList: makeSelectTransformCompaniesList(),
});

export default function Navigation() {
  const {
    location: { pathname },
    user: { role },
    transformCompaniesList,
  } = useSelector(stateSelector);

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutAction());
  const handleSelected = () => {
    const selectedKeys = [];

    if (pathname.includes(COMPANIES_LIST)) selectedKeys.push('0');
    if (pathname.includes(ISSUES)) selectedKeys.push('1');
    if (pathname.includes(RESOURCES)) selectedKeys.push('2');
    if (pathname.includes(EMAIL_ADRESSES)) selectedKeys.push('3');

    return selectedKeys;
  };

  return (
    <>
      {role === 'admin' ? (
        <Menu theme="light" mode="inline" defaultOpenKeys={['sub1']}>
          <SubMenu
            key="sub1"
            title={
              <>
                <Icon type="monitor" />
                <FormattedMessage {...messages.companiesList} />
              </>
            }
          >
            {transformCompaniesList &&
              transformCompaniesList.map(company => (
                <SubMenu key={company.key} title={company.name}>
                  <Menu.Item key={company.key + 1}>
                    <NavLinkWrapper
                      to={`/${COMPANIES_LIST}/${company.key}/${ISSUES}`}
                    >
                      <Icon
                        custom="true"
                        component={() => (
                          <NavigationCustomIcon src={issueImage} />
                        )}
                      />
                      <FormattedMessage {...messages.foundIssues} />
                    </NavLinkWrapper>
                  </Menu.Item>

                  <Menu.Item key={company.key + 2}>
                    <NavLinkWrapper
                      to={`/${COMPANIES_LIST}/${company.key}/${RESOURCES}`}
                    >
                      <Icon type="global" />
                      <FormattedMessage {...messages.resources} />
                    </NavLinkWrapper>
                  </Menu.Item>

                  <Menu.Item key={company.key + 3}>
                    <NavLinkWrapper
                      to={`/${COMPANIES_LIST}/${company.key}/${EMAIL_ADRESSES}`}
                    >
                      <Icon type="mail" />
                      <FormattedMessage {...messages.emailAddresses} />
                    </NavLinkWrapper>
                  </Menu.Item>
                </SubMenu>
              ))}
          </SubMenu>
        </Menu>
      ) : (
        <Menu
          theme="light"
          selectedKeys={handleSelected && handleSelected()}
          mode="inline"
        >
          <Menu.Item key="1">
            <NavLinkWrapper to={`/${ISSUES}`}>
              <Icon
                custom="true"
                component={() => <NavigationCustomIcon src={issueImage} />}
              />
              <FormattedMessage {...messages.foundIssues} />
            </NavLinkWrapper>
          </Menu.Item>

          <Menu.Item key="2">
            <NavLinkWrapper to={`/${RESOURCES}`}>
              <Icon type="global" />
              <FormattedMessage {...messages.resources} />
            </NavLinkWrapper>
          </Menu.Item>

          <Menu.Item key="3">
            <NavLinkWrapper to={`/${EMAIL_ADRESSES}`}>
              <Icon type="mail" />
              <FormattedMessage {...messages.emailAddresses} />
            </NavLinkWrapper>
          </Menu.Item>

          <Menu.Item key="4" onClick={handleLogout}>
            <Icon type="logout" />
            <FormattedMessage {...messages.disconnect} />
          </Menu.Item>
        </Menu>
      )}
    </>
  );
}
