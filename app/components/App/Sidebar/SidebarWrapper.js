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
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    transition: all 0.1s ease-in-out;
  }
`;

export default SidebarWrapper;
