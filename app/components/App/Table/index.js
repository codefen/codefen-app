/* eslint-disable indent */
/**
 *
 * TableWrapper
 *
 */

import styled from 'styled-components';
import { Table } from 'antd';
import { PRIMARY_RED } from 'utils/colors';

const TableWrapper = styled(Table)`
  &&& {
    @media only screen and (max-width: 480px) {
      table {
        border: 0;

        caption {
          font-size: 1.3em;
        }

        thead {
          border: none;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }

        tr {
          border-bottom: 3px solid #ddd;
          display: block;
          margin-bottom: 0.625em;
        }

        td {
          border-bottom: 1px solid #ddd;
          display: block;
          font-size: 0.8em;
          text-align: right;

          &::before {
            float: left;
            font-weight: bold;
            text-transform: lowercase;
            color: ${PRIMARY_RED};
          }

          &:nth-child(2) {
            &::before {
              content: ${props =>
                props.issues &&
                `'${props.issues[1].title.props.defaultMessage}'`};
              content: ${props =>
                props.resources &&
                `'${props.resources[1].title.props.defaultMessage}'`};
              content: ${props =>
                props.emails &&
                `'${props.emails[1].title.props.defaultMessage}'`};
            }
          }

          &:nth-child(3) {
            &::before {
              content: ${props =>
                props.issues &&
                `'${props.issues[2].title.props.defaultMessage}'`};
              content: ${props =>
                props.resources &&
                `'${props.resources[2].title.props.defaultMessage}'`};
              content: ${props =>
                props.emails &&
                `'${props.emails[2].title.props.defaultMessage}'`};
            }
          }

          &:nth-child(4) {
            &::before {
              content: ${props =>
                props.issues &&
                `'${props.issues[3].title.props.defaultMessage}'`};
              content: ${props =>
                props.resources &&
                `'${props.resources[3].title.props.defaultMessage}'`};
            }
          }

          &:last-child {
            border-bottom: 0;
          }
        }
      }
    }

    .ant-table-body {
      tr {
        &:hover {
          td {
            background: rgba(0, 0, 0, 0.05);
          }
        }
      }

      .ant-table-header-column {
        display: flex;
      }

      .ant-table-column-title {
        display: flex;
        align-items: center;
      }

      .ant-table-thead {
        th {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          font-weight: 400;
          color: #fff;
          background-color: ${PRIMARY_RED};
          padding: 10px 16px;
        }
      }

      .ant-table-tbody {
        .ant-table-row {
          td {
            padding: 10px 16px;
          }
        }
      }
    }

    .ant-pagination-prev {
      &:hover {
        border-color: ${PRIMARY_RED};
      }
    }

    .ant-pagination {
      .ant-pagination-item,
      .ant-pagination-prev,
      .ant-pagination-next {
        &:hover {
          border-color: ${PRIMARY_RED};
          color: ${PRIMARY_RED};

          &:not(.ant-pagination-disabled) {
            a {
              color: ${PRIMARY_RED};
              border-color: ${PRIMARY_RED};
            }
          }
        }
      }

      .ant-pagination-item-link {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ant-pagination-item-active {
        border-color: ${PRIMARY_RED};

        a {
          color: ${PRIMARY_RED};
        }
      }
    }
  }
`;

export default TableWrapper;
