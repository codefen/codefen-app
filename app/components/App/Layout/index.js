/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsed } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import ContentWrapper from './ContentWrapper';
import LayoutWrapper from './LayoutWrapper';
import Drawer from '../Drawer';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function LayoutComponent({ children }) {
  const { isCollapsed } = useSelector(stateSelector);

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
