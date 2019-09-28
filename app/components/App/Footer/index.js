/**
 *
 * Footer
 *
 */

import React from 'react';
import FooterWrapper from './FooterWrapper';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsed } from 'containers/App/selectors';

const stateSelector = createStructuredSelector({
  isCollapsed: makeSelectIsCollapsed(),
});

export default function Footer() {
  const { isCollapsed } = useSelector(stateSelector);

  return (
    <FooterWrapper open={isCollapsed}>
      Copyright &copy; 2019 | codefen.com
    </FooterWrapper>
  );
}
