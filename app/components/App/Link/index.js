/**
 *
 * Link
 *
 */

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SECONDARY_RED, PRIMARY_BLACK } from 'utils/colors';

const LinkWrapper = styled(Link)`
  display: block;
  color: ${PRIMARY_BLACK};

  &:hover {
    color: ${SECONDARY_RED};
  }
`;

export default LinkWrapper;
