/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import Menu from 'components/Menu';
import { Layout, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Menu from 'components/App/Menu';

export default function Navigation() {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="user" />
        <span>found issues</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" />
        <span>resources</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span>email addresses</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="logout" />
        <span>disconnect</span>
      </Menu.Item>
    </Menu>
  );
}
