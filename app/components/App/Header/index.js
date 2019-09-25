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
import HeaderWrapper from './HeaderWrapper';

export default function HeaderComponent() {
  return <HeaderWrapper>test</HeaderWrapper>;
}
