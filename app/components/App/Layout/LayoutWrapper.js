/**
 *
 * LayoutWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';

const LayoutWrapper = styled(Layout)`
  &.ant-layout {
    transition: all 0.1s ease-in-out;
    padding-left: ${props => (props.open ? '80px' : '250px')};
  }
`;

export default LayoutWrapper;
