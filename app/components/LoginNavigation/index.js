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
import NavLink from 'components/NavLink';

function LoginNavigation() {
  return (
    <Menu mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <NavLink to="/login">
          <FormattedMessage {...messages.access} />
        </NavLink>
      </Menu.Item>

      <Menu.Item key="2">
        <NavLink to="/login">
          <FormattedMessage {...messages.newUser} />
        </NavLink>
      </Menu.Item>
    </Menu>
  );
}

LoginNavigation.propTypes = {};

export default LoginNavigation;
