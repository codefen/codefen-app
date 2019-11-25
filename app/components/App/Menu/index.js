/**
 *
 * Menu
 *
 */

import styled from 'styled-components';
import { Menu } from 'antd';

const MenuWrapper = styled(Menu)`
  &&& {
    background: transparent;
    border-right: 0;
    color: #fff;
    font-weight: 700;

    .ant-menu-item {
      display: flex;
      align-items: center;
      margin: 0;
      color: rgba(255, 255, 255, 0.65);

      a {
        color: rgba(255, 255, 255, 0.65);
      }

      &.ant-menu-item-selected {
        background-color: rgba(0, 0, 0, 0.05);
        color: #fff;
        // pointer-events: none;
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

    .ant-menu-submenu-selected {
      color: #fff;
      font-weight: 400;
    }

    .ant-menu-sub {
      background: transparent;
      color: rgba(255, 255, 255, 0.65);
    }

    .ant-menu-submenu-title {
      &:hover {
        color: #fff;

        .ant-menu-submenu-arrow {
          &::after,
          &::before {
            background: rgba(255, 255, 255, 0.65);
          }
        }
      }

      .ant-menu-submenu-arrow {
        &::after,
        &::before {
          background: rgba(255, 255, 255, 0.65);
        }

      &:hover {
        .ant-menu-submenu-arrow {
          &::after,
          &::before {
            background: rgba(255, 255, 255, 0.65);
          }
        }
      }
    }
  }
`;

export default MenuWrapper;
