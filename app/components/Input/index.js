/**
 *
 * Input
 *
 */

import styled from 'styled-components';
import { Input } from 'antd';
import { PRIMARY_RED } from 'utils/colors';

const InputWrapper = styled(Input)`
  height: 36px;
  font-size: 15px;
  margin-bottom: 20px;

  &:hover {
    .ant-input {
      &:not(.ant-input-disabled) {
        border-color: ${PRIMARY_RED};
      }
    }
  }

  .ant-input {
    border-radius: 0;

    &:hover,
    &:focus {
      border-color: ${PRIMARY_RED};
    }

    &:not(:first-child) {
      padding-left: 35px;
    }
  }

  .ant-input[disabled] {
    &:hover {
      border-color: #d9d9d9;
    }
  }
`;

export default InputWrapper;
