/**
 *
 * Header
 *
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function HeaderComponent() {
  return <Header style={{ background: '#fff', padding: 0 }}>test</Header>;
}
