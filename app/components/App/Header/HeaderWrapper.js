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
    padding: 0 25px;
    height: 83px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #fff;
  }
`;

export default HeaderWrapper;
