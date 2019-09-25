/**
 *
 * Sidebar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import Logo from 'images/logo.png';

import SidebarWrapper from './SidebarWrapper';
import Navigation from 'components/App/Navigation';
import LoginLogoWrapper from './LoginLogoWrapper';

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <LoginLogoWrapper src={Logo} />

      <Navigation />
    </SidebarWrapper>
  );
}
