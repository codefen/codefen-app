/**
 *
 * CompanyNameWrapper
 *
 */

import styled from 'styled-components';
import { PRIMARY_RED } from 'utils/colors';

const CompanyNameWrapper = styled.div`
  color: ${PRIMARY_RED};
  font-size: ${props => props.header && '17.5px'};
`;

export default CompanyNameWrapper;
