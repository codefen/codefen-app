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
    box-shadow: 4px 0px 8px -3px rgba(17, 17, 17, 0.6);
  }
`;

export default SidebarWrapper;
