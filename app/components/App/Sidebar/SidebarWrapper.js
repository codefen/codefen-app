/**
 *
 * SidebarWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
const { Sider } = Layout;
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';

const SidebarWrapper = styled(Sider)`
  &.ant-layout-sider {
  }
`;

export default SidebarWrapper;
