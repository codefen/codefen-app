/**
 *
 * DetailSubheaderWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';
import { PRIMARY_GREY } from 'utils/colors';

const DetailSubheaderWrapper = styled.section`
  display: flex;
  border-bottom: 2px solid ${PRIMARY_GREY};
  flex-direction: column;

  ${media.tablet`
    flex-direction: inherit;
  `}
`;

export default DetailSubheaderWrapper;
