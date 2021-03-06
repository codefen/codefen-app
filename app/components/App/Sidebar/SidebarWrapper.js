/**
 *
 * SidebarWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';
import { media } from 'utils';
const { Sider } = Layout;

const SidebarWrapper = styled(Sider)`
  &.ant-layout-sider {
    background: linear-gradient(180deg, ${PRIMARY_RED} 5%, ${SECONDARY_RED});
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    transition: all 0.1s ease-in-out;
    box-shadow: 4px 0px 8px -3px rgba(17, 17, 17, 0.6);
    display: none;
    overflow-x: hidden;

    ${media.tablet`
      display: block;
    `}
  }
`;

export default SidebarWrapper;
