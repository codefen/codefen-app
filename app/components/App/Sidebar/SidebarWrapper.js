/**
 *
 * SidebarWrapper
 *
 */

import styled from 'styled-components';
const { Sider } = Layout;
import { Layout } from 'antd';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';

const SidebarWrapper = styled(Sider)`
  &.ant-layout-sider {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    width: 245px !important;
    min-width: 245px !important;
    max-width: 245px !important;
    background: linear-gradient(180deg, ${PRIMARY_RED} 5%, ${SECONDARY_RED});
  }
`;

export default SidebarWrapper;
