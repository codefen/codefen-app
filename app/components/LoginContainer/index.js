/**
 *
 * LoginContainer
 *
 */

import styled from 'styled-components';
import { SECONDARY_RED } from 'utils/colors';
import background from 'images/background.svg';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${SECONDARY_RED};
  background-image: url('${background}');
`;

export default LoginContainer;
