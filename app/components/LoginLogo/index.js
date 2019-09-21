/**
 *
 * LoginLogo
 *
 */

import React from 'react';
import LogoPng from 'images/logo.png';

import LoginLogoContainer from './LoginLogoContainer';
import LoginLogoWrapper from './LoginLogoWrapper';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

export default function LoginLogo() {
  return (
    <LoginLogoContainer>
      <LoginLogoWrapper src={LogoPng} alt="Codefen" />
    </LoginLogoContainer>
  );
}
