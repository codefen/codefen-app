/**
 *
 * Navigation
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import NavLinkWrapper from '../../NavLink';
import messages from './messages';
import Menu from 'components/App/Menu';
import Icon from './NavigationIcon';
import { logoutAction } from '../../../containers/App/actions';

export default function Navigation() {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutAction());

  return (
    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <NavLinkWrapper to="/issues">
          <Icon type="user" />
          <FormattedMessage {...messages.foundIssues} />
        </NavLinkWrapper>
      </Menu.Item>

      <Menu.Item key="2">
        <NavLinkWrapper to="/resources">
          <Icon type="video-camera" />
          <FormattedMessage {...messages.resources} />
        </NavLinkWrapper>
      </Menu.Item>

      <Menu.Item key="3">
        <NavLinkWrapper to="/email-addresses">
          <Icon type="upload" />
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
