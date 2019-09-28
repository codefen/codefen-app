/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import ContentWrapper from './ContentWrapper';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';
import LayoutWrapper from './LayoutWrapper';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsed } from 'containers/App/selectors';
import { useSelector } from 'react-redux';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function LayoutComponent({ children }) {
  const { isCollapsed } = useSelector(stateSelector);

  return (
    <Layout>
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
