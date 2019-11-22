/**
 *
 * CompanyLogoWrapper
 *
 */

import styled from 'styled-components';

const CompanyLogoWrapper = styled.img`
  width: 50px;
  display: block;
  border-radius: 50%;
  display: ${props => (props.mobile ? 'block' : 'none')};

  @media only screen and (min-width: 480px) {
    display: ${props => (props.mobile ? 'none' : 'block')};
  }
`;

export default CompanyLogoWrapper;
