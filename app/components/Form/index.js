/**
 *
 * Form
 *
 */

import styled from 'styled-components';
import { PRIMARY_RED } from 'utils/colors';

const Form = styled.form`
  .ant-input-password {
    height: 36px;
    font-size: 15px;
    margin-bottom: 15px;

    &:hover {
      .ant-input {
        &:not(.ant-input-disabled) {
          border-color: ${PRIMARY_RED};
        }
      }
    }

    .ant-input {
      border-radius: 0;
      background-color: ${props => props.error && '#ff000014'};

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
  }
`;

export default Form;
