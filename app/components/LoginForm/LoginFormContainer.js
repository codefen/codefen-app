/**
 *
 * LoginFormContainer
 *
 */

import styled from 'styled-components';
import { media } from 'utils';

const LoginFormContainer = styled.main`
  padding: 25px;
  width: 100%;

  ${media.tablet`
    padding: 45px;
    width: 70%;
  `}
`;

export default LoginFormContainer;
