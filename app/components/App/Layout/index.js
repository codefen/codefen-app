/**
 *
 * Layout
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Sider, Content } = Layout;
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';

export default function LayoutComponent({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
