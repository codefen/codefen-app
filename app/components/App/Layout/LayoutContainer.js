/**
 *
 * LayoutContainer
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from 'utils';
import background from 'images/background.svg';
import { SECONDARY_RED } from 'utils/colors';

const LayoutContainer = styled(Layout)`
&&& {
    &.ant-layout {
          background-image: url('${background}');
      }
}
`;

export default LayoutContainer;
