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
    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="user" style={{ fontSize: 17, marginRight: 19 }} />
        <span>found issues</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="video-camera" style={{ fontSize: 17, marginRight: 19 }} />
        <span>resources</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" style={{ fontSize: 17, marginRight: 19 }} />
        <span>email addresses</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="logout" style={{ fontSize: 17, marginRight: 19 }} />
        <span>disconnect</span>
      </Menu.Item>
    </Menu>
  );
}
