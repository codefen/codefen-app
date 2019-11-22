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
`;

export default CompanyTableWrapper;
