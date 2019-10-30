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
          }

          &:nth-child(2) {
            &::before {
              content: ${props =>
                props.nameOfColumns && `'${props.nameOfColumns[0]}'`};
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

    .ant-pagination {
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
