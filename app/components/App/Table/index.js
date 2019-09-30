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
