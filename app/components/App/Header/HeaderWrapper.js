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
    height: 87px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export default HeaderWrapper;
