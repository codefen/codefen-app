/**
 *
 * FooterWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';

const FooterWrapper = styled.footer`
  color: rgba(255, 255, 255, 0.65);
  display: block;
  text-align: center;
  font-size: 13px;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  transition: visibility 0s, opacity 0.5s linear;

  ${media.tablet`
    visibility: ${props => (props.open ? 'hidden' : 'visible')};
    opacity: ${props => (props.open ? 0 : 1)};
  `}
`;

export default FooterWrapper;
