/**
 *
 * CompanyLogoWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';

const CompanyLogoWrapper = styled.img`
  width: 40px;
  display: block;
  border-radius: 50%;
  display: ${props => (props.mobile ? 'block' : 'none')};

  ${media.mobile`
    display: ${props => (props.mobile ? 'none' : 'block')};
    width: 50px;
  `}
`;

export default CompanyLogoWrapper;
