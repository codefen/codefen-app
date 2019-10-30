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
      margin: 0;
      color: rgba(0, 0, 0, 0.25);

      &:not(:last-child) {
        margin-bottom: 0;
      }

      &:hover {
        color: ${SECONDARY_RED};
      }

      > a {
        display: block;
        text-align: center;

        &:hover {
          color: ${SECONDARY_RED};
        }
      }
    }

    .ant-menu-item-selected {
      background-color: rgba(0, 0, 0, 0.05);
      color: ${PRIMARY_RED};
      pointer-events: none;
      font-weight: 700;

      &:after {
        border-right: 3px solid ${PRIMARY_RED};
      }

      > a {
        color: ${PRIMARY_RED};

        &:hover {
          color: ${SECONDARY_RED};
        }
      }
    }

    &.ant-menu-horizontal {
      display: flex;
      justify-content: center;
      align-items: center;

      > .ant-menu-item-selected,
      .ant-menu-item-active {
        border-bottom: 2px solid ${PRIMARY_RED};
      }

      .ant-menu-item {
        width: 100%;
        text-align: center;
      }
    }

    ${media.tablet`
      .ant-menu-item {
        > a {
          display: block;
          text-align: left;
        }
      }
    `}
  }
`;

export default MenuWrapper;
