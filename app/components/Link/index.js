/**
 *
 * Link
 *
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SECONDARY_RED } from 'utils/colors';

const LinkWrapper = styled(Link)`
  display: block;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;

  &:hover {
    color: ${SECONDARY_RED};
  }
`;

export default LinkWrapper;
