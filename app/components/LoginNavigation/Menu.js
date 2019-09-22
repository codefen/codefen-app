/**
 *
 * Menu
 *
 */

import styled from 'styled-components';
import { Menu } from 'antd';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';

const MenuWrapper = styled(Menu)`
  &&& {
    .ant-menu-item {
      margin: 0;
      color: rgba(0, 0, 0, 0.25);

      &:not(:last-child) {
        margin-bottom: 0;
      }

      &:hover {
        color: ${SECONDARY_RED};
      }
    }

    .ant-menu-item-selected {
      background-color: #ffe6e6;
      color: ${PRIMARY_RED};

      &:after {
        border-right: 3px solid ${PRIMARY_RED};
      }
    }
  }
`;

export default MenuWrapper;
