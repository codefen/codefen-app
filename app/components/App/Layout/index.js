/**
 *
 * Layout
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsed } from 'containers/App/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { checkUserLoggedAction } from 'containers/App/actions';
import ContentWrapper from './ContentWrapper';
import LayoutWrapper from './LayoutWrapper';
import Drawer from '../Drawer';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function LayoutComponent({ children }) {
  const { isCollapsed } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const handleLogged = () => dispatch(checkUserLoggedAction());

  useEffect(() => {
    handleLogged();
  }, []);

  return (
    <Layout>
      <Drawer />
      <Sidebar />
      <LayoutWrapper open={isCollapsed}>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </LayoutWrapper>
    </Layout>
  );
}

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
