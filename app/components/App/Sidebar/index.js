/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const { Header, Content, Footer, Sider } = Layout;
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Navigation from 'components/App/Navigation';

export default function Sidebar() {
  return (
    <Sider collapsible>
      <div className="logo">test</div>
      <Navigation />
    </Sider>
  );
}
