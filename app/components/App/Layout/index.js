/**
 *
 * Layout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Layout } from 'antd';
import ContentWrapper from './ContentWrapper';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';
import LayoutWrapper from './LayoutWrapper';

export default function LayoutComponent({ children }) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Layout>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
      </Layout>
    </LayoutWrapper>
  );
}
