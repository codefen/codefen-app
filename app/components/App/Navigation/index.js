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
import { makeSelectLocation } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { ISSUES, RESOURCES, EMAIL_ADRESSES } from 'routes';
import NavLinkWrapper from '../../NavLink';
import messages from './messages';
import Icon from './NavigationIcon';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

export default function Navigation() {
  const {
    location: { pathname },
  } = useSelector(stateSelector);

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutAction());
  const handleSelected = () => {
    const selectedKeys = [];

    if (pathname === ISSUES) selectedKeys.push('1');
    if (pathname === RESOURCES) selectedKeys.push('2');
    if (pathname === EMAIL_ADRESSES) selectedKeys.push('3');

    return selectedKeys;
  };

  return (
    <Menu
      theme="light"
      selectedKeys={handleSelected && handleSelected()}
      mode="inline"
    >
      <Menu.Item key="1">
        <NavLinkWrapper to={ISSUES}>
          <Icon type="user" />
          <FormattedMessage {...messages.foundIssues} />
        </NavLinkWrapper>
      </Menu.Item>

      <Menu.Item key="2">
        <NavLinkWrapper to={RESOURCES}>
          <Icon type="global" />
          <FormattedMessage {...messages.resources} />
        </NavLinkWrapper>
      </Menu.Item>

      <Menu.Item key="3">
        <NavLinkWrapper to={EMAIL_ADRESSES}>
          <Icon type="mail" />
          <FormattedMessage {...messages.emailAddresses} />
        </NavLinkWrapper>
      </Menu.Item>

      <Menu.Item key="4" onClick={handleLogout}>
        <Icon type="logout" />
        <FormattedMessage {...messages.disconnect} />
      </Menu.Item>
    </Menu>
  );
}
