/**
 *
 * LayoutWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from 'utils';
import background from 'images/background_black.svg';

const LayoutWrapper = styled(Layout)`
  &.ant-layout {
    transition: all 0.1s ease-in-out;
    padding-left: 0;
    background-image: url('${background}');
    background-color: #fff;

    ${media.tablet`
      padding-left: ${props => (props.open ? '80px' : '250px')};
    `}
  }
`;

export default LayoutWrapper;
