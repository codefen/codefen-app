/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import Menu from 'components/Menu';
import { Layout, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Menu from 'components/App/Menu';
import Icon from './NavigationIcon';

export default function Navigation() {
  return (
    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="user" />
        <FormattedMessage {...messages.foundIssues} />
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <FormattedMessage {...messages.resources} />
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <FormattedMessage {...messages.emailAddresses} />
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="logout" />
        <FormattedMessage {...messages.disconnect} />
      </Menu.Item>
    </Menu>
  );
}
