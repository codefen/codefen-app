/**
 *
 * HeaderWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;
import { PRIMARY_RED } from 'utils/colors';

const HeaderWrapper = styled(Header)`
  &.ant-layout-header {
    height: 83px;
    display: flex;
    align-items: center;
    color: #000;
    padding: 0;
    position: fixed;
    width: 100%;
    background: #fff;
  }
`;

export default HeaderWrapper;
