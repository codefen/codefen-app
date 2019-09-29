/**
 *
 * LoginLogoWrapper
 *
 */

import styled from 'styled-components';
import LogoDesktop from 'images/logo.png';
import LogoMobile from 'images/logo_min.png';

const LogoWrapper = styled.div`
  margin: 15px auto;
  background-image: ${props =>
    props.open ? `url(${LogoMobile})` : `url(${LogoDesktop})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  max-height: 53px;
  height: 100%;
`;

export default LogoWrapper;
