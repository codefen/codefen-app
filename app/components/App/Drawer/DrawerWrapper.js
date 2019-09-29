/**
 *
 * Menu
 *
 */

import styled from 'styled-components';
import { media } from 'utils';
import { Drawer } from 'antd';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';

const DrawerWrapper = styled(Drawer)`
  .ant-drawer-content {
    background: linear-gradient(180deg, ${PRIMARY_RED} 5%, ${SECONDARY_RED});

    .ant-drawer-body {
      padding: 0;
    }
  }
`;

export default DrawerWrapper;
