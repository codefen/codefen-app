/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Logo from 'images/logo.png';
import SidebarWrapper from './SidebarWrapper';
import Navigation from 'components/App/Navigation';
import LoginLogoWrapper from './LoginLogoWrapper';
import Footer from 'components/App/Footer';

import { makeSelectIsCollapsed } from 'containers/App/selectors';
import { toggleSidebarAction } from 'containers/App/actions';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function Sidebar() {
  const { isCollapsed } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onToggleSidebar = () => dispatch(toggleSidebarAction());

  return (
    <SidebarWrapper
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      width={250}
    >
      <LoginLogoWrapper open={isCollapsed} />

      <Navigation />

      <Footer />
    </SidebarWrapper>
  );
}
