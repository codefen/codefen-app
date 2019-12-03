/**
 *
 * ReferenceWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';

const ReferenceWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  i {
    margin-right: 3px;
    margin-top: -2px;
  }

  ${media.tablet`
    justify-content: end;
  `}
`;

export default ReferenceWrapper;
