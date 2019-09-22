/**
 *
 * LoginAside
 *
 */

import React from 'react';
import LogoPng from 'images/logo.png';

import LoginAsideContainer from './LoginAsideContainer';
import LoginLogoWrapper from './LoginLogoWrapper';
import LoginNavigation from 'components/LoginNavigation';

export default function LoginLogo() {
  return (
    <LoginAsideContainer>
      <header>
        <LoginLogoWrapper src={LogoPng} alt="Codefen" />
      </header>
      <LoginNavigation />
    </LoginAsideContainer>
  );
}
