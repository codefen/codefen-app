/**
 *
 * Header
 *
 */

import React, { useEffect } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import HeaderWrapper from './HeaderWrapper';
import { useSelector, useDispatch } from 'react-redux';
const { Header, Content, Footer, Sider } = Layout;

import { makeSelectIsCollapsed } from 'containers/App/selectors';
import { toggleSidebarAction } from 'containers/App/actions';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function HeaderComponent() {
  const { isCollapsed } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onToggleSidebar = () => dispatch(toggleSidebarAction());

  return (
    <HeaderWrapper open={isCollapsed}>
      <Icon
        className="trigger"
        style={{ color: '#fff', fontSize: 18 }}
        type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onToggleSidebar}
      />
    </HeaderWrapper>
  );
}
