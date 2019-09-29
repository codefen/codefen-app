/**
 *
 * Drawer
 *
 */

import React from 'react';
import { Drawer } from 'antd';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsDrawer } from 'containers/App/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDrawerAction } from 'containers/App/actions';
import Navigation from 'components/App/Navigation';
import DrawerWrapper from './DrawerWrapper';
import Footer from 'components/App/Footer';
import LogoWrapper from './LogoWrapper';

const stateSelector = createStructuredSelector({
  isDrawer: makeSelectIsDrawer(),
});

export default function DrawerComponent() {
  const { isDrawer } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onToggleDrawer = () => dispatch(toggleDrawerAction());

  return (
    <DrawerWrapper
      placement="left"
      closable={false}
      visible={isDrawer}
      onClose={onToggleDrawer}
    >
      <LogoWrapper />
      <Navigation />
      <Footer />
    </DrawerWrapper>
  );
}
