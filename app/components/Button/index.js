/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import { Button } from 'antd';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';
import { media } from 'utils';

const ButtonWrapper = styled(Button)`
  &&& {
    background-color: ${PRIMARY_RED};
    border-color: ${PRIMARY_RED};
    display: block;
    height: 36px;
    width: 100%;
    max-width: 115px;
    border-radius: 0;
    color: #fff;

    &:hover {
      background-color: ${SECONDARY_RED};
      border-color: ${SECONDARY_RED};
      color: #fff;
    }

    &:focus {
      background-color: ${PRIMARY_RED};
      border-color: ${PRIMARY_RED};
      color: #fff;
    }

    ${media.tablet`
    max-width: 100px;
  `}
  }
`;

export default ButtonWrapper;
