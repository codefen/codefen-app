/**
 *
 * CompanyTableWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';

const CompanyTableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.name ? 'space-between' : 'flex-end')};

  ${media.mobile`
    justify-content: ${props => props.issues && 'end'};
  `}
`;

export default CompanyTableWrapper;
