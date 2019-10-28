/**
 *
 * NavLink
 *
 */

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavLinkWrapper = styled(NavLink)`
  &&& {
    display: flex;
    align-items: center;
  }
`;

export default NavLinkWrapper;
