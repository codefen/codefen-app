/**
 *
 * Menu
 *
 */

import styled from 'styled-components';
import { media } from 'utils';
import { Menu } from 'antd';
import { PRIMARY_RED } from 'utils/colors';

const MenuWrapper = styled(Menu)`
  &&& {
    background: transparent;
    border-right: 0;

    .ant-menu-item {
      display: flex;
      align-items: center;
      margin: 0;
      color: rgba(255, 255, 255, 0.65);

      a {
        color: rgba(255,255,255,0.65);

        // &:hover {
        //   font-weight: bold;
        // }
      }

      // > a {
      //   color: rgba(255,255,255,0.65)

      //   &:hover {
      //     color: rgba(255,255,255,0.65)
      //   }
      // }

      &.ant-menu-item-selected {
        background-color: rgba(0, 0, 0, 0.05);
        color: #fff;
        pointer-events: none;
        font-weight: 700;

        &:after {
          border-right: 3px solid #fff;
        }

        > a {
          color: #fff;

          &:hover {
            color: #fff;
          }
        }
    }
  }
`;

export default MenuWrapper;
