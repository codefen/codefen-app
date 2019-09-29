/**
 *
 * LogoWrapper
 *
 */

import styled from 'styled-components';
import LogoDesktop from 'images/logo.png';

const LogoWrapper = styled.div`
  margin: 15px auto;
  background-image: url(${LogoDesktop});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 53px;
`;

export default LogoWrapper;
