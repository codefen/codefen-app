/**
 *
 * LoginAside
 *
 */

import React from 'react';
import LogoPng from 'images/logo.png';

import LoginNavigation from 'components/LoginNavigation';
import LoginAsideContainer from './LoginAsideContainer';
import LoginLogoWrapper from './LoginLogoWrapper';
import LogoAsideHeader from './LogoAsideHeader';

export default function LoginLogo() {
  return (
    <LoginAsideContainer>
      <LogoAsideHeader>
        <LoginLogoWrapper src={LogoPng} alt="Codefen" />
      </LogoAsideHeader>
      <LoginNavigation />
    </LoginAsideContainer>
  );
}
