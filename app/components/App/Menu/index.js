/**
 *
 * Menu
 *
 */

import styled from 'styled-components';
import { media } from 'utils';
import { Menu } from 'antd';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';

const MenuWrapper = styled(Menu)`
  &&& {
    .ant-menu-item {
      display: flex;
      align-items: center;
      margin: 0;
    }
  }
`;

export default MenuWrapper;
