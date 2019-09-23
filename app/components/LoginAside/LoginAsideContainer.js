/**
 *
 * LoginAsideContainer
 *
 */

import styled from 'styled-components';
import { PRIMARY_RED, SECONDARY_RED } from 'utils/colors';
import { media } from 'utils';

const LoginAsideContainer = styled.aside`
  width: 100%;
  background: linear-gradient(180deg, ${PRIMARY_RED} 5%, ${SECONDARY_RED});

  ${media.tablet`
    width: 30%;
  `}
`;

export default LoginAsideContainer;
