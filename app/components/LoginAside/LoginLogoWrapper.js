/**
 *
 * LoginLogoWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';

const LoginLogoWrapper = styled.img`
  width: 55%;
  margin: 25px 0;

  ${media.tablet`
    width: 100%;
    margin: 50px 0;
  `}
`;

export default LoginLogoWrapper;
