/**
 *
 * Link
 *
 */

import styled from 'styled-components';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';

const Link = styled.a`
  display: block;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;

  &:hover {
    color: ${SECONDARY_RED};
  }
`;

export default Link;
