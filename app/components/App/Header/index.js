/**
 *
 * Header
 *
 */

import React, { useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import HeaderWrapper from './HeaderWrapper';
import { useSelector, useDispatch } from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;
import Icon from './HeaderIcon';

import { makeSelectIsCollapsed } from 'containers/App/selectors';
import {
  toggleSidebarAction,
  toggleDrawerAction,
} from 'containers/App/actions';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function HeaderComponent() {
  const { isCollapsed } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onToggleSidebar = () => dispatch(toggleSidebarAction());
  const onToggleDrawer = () => dispatch(toggleDrawerAction());

  return (
    <HeaderWrapper open={isCollapsed}>
      <Icon
        className="trigger"
        type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onToggleSidebar}
      />
      <Icon className="trigger" type="bars" onClick={onToggleDrawer} />
    </HeaderWrapper>
  );
}
