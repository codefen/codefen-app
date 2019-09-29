/**
 *
 * PageHeaderAction
 *
 */

import styled from 'styled-components';
import { PRIMARY_RED } from 'utils/colors';

const PageHeaderAction = styled.div`
  position: absolute;
  right: 0px;
  display: flex;
  align-items: center;
  color: ${PRIMARY_RED};
  padding: 15px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
`;

export default PageHeaderAction;
