/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Menu from 'components/Menu';
import { Layout, Breadcrumb, Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function Navigation() {
  return (
    <Menu defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <span>found issues</span>
      </Menu.Item>
      <Menu.Item key="2">
        <span>resources</span>
      </Menu.Item>
      <Menu.Item key="3">
        <span>email addresses</span>
      </Menu.Item>
      <Menu.Item key="4">
        <span>preferences</span>
      </Menu.Item>
      <Menu.Item key="5">
        <span>disconnect</span>
      </Menu.Item>
    </Menu>
  );
}
