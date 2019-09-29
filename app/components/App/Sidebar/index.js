/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SidebarWrapper from './SidebarWrapper';
import Navigation from 'components/App/Navigation';
import LogoWrapper from './LogoWrapper';
import Footer from 'components/App/Footer';

import { makeSelectIsCollapsed } from 'containers/App/selectors';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function Sidebar() {
  const { isCollapsed } = useSelector(stateSelector);

  return (
    <SidebarWrapper
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      width={250}
    >
      <LogoWrapper open={isCollapsed} />
      <Navigation />
      <Footer />
    </SidebarWrapper>
  );
}
