/**
 *
 * Header
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectIsCollapsed } from 'containers/App/selectors';
import {
  toggleSidebarAction,
  toggleDrawerAction,
} from 'containers/App/actions';
import Icon from './HeaderIcon';
import HeaderWrapper from './HeaderWrapper';

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
