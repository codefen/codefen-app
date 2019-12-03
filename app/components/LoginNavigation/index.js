/**
 *
 * LoginNavigation
 *
 */

import React from 'react';

import Menu from 'components/Menu';
import MediaQuery from 'react-responsive';
import { sizes } from 'utils/media';
import { FormattedMessage } from 'react-intl';
import NavLink from 'components/NavLink';
import messages from './messages';

export default function LoginNavigation() {
  return (
    <MediaQuery minWidth={sizes.tablet}>
      {matches => (
        <Menu
          mode={matches ? 'inline' : 'horizontal'}
          defaultSelectedKeys={['1']}
        >
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
      )}
    </MediaQuery>
  );
}
