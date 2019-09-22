/**
 *
 * LoginNavigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Icon } from 'antd';
import Menu from './Menu';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function LoginNavigation() {
  return (
    <Menu defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <FormattedMessage {...messages.access} />
      </Menu.Item>
      <Menu.Item key="2">
        <FormattedMessage {...messages.newUser} />
      </Menu.Item>
    </Menu>
  );
}

LoginNavigation.propTypes = {};

export default LoginNavigation;
