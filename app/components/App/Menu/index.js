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
    background: transparent;
    border-right: 0;

    .ant-menu-item {
      display: flex;
      align-items: center;
      margin: 0;
      color: rgba(255, 255, 255, 0.65);

      &.ant-menu-item-selected {
        background-color: rgba(0, 0, 0, 0.05);
        // color: ${PRIMARY_RED};
        color: #fff;
        pointer-events: none;
        font-weight: 700;
  
        &:after {
          border-right: 3px solid #fff;
        }
  
        > a {
          color: ${PRIMARY_RED};
  
          &:hover {
            color: ${SECONDARY_RED};
          }
        }
    }
  }
`;

export default MenuWrapper;
