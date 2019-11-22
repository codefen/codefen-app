/**
 *
 * CompanyTableWrapper
 *
 */

import styled from 'styled-components';

const CompanyTableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.name ? 'space-between' : 'flex-end')};

  @media screen and (min-width: 480px) {
    justify-content: ${props => props.issues && 'end'};
  }
`;

export default CompanyTableWrapper;
