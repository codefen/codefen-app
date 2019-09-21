/**
 *
 * Link
 *
 */

import styled from 'styled-components';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';

const Link = styled.a`
  display: block;
  color: ${PRIMARY_RED};
  font-size: 12px;

  &:hover {
    color: ${SECONDARY_RED};
  }
`;

export default Link;
