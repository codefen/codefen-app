/**
 *
 * LoginWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';

const LoginWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: block;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  width: 85%;
  max-width: 620px;
  background: #fff;
  border: 0;

  ${media.tablet`
    display: flex;
    width: 100%;
    height: 100%;
    max-height: 350px;
  `}
`;

export default LoginWrapper;
