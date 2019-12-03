/**
 *
 * DetailSubheaderItemWrapper
 *
 */

import styled from 'styled-components';
import { media } from 'utils';
import { PRIMARY_GREY, PRIMARY_RED } from 'utils/colors';

const DetailSubheaderItemWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;

  span {
    color: ${PRIMARY_RED};
    font-weight: 700;
    margin-right: 5px;
  }

  ${media.tablet`
    display: block;

    // &:not(:last-child) {
    //   &:after {
    //     content: '';
    //     border: 1px solid ${PRIMARY_GREY};
    //     margin-left: 10px;
    //     height: 100%;
    //     top: 0;
    //   }
    // }
  `}
`;

export default DetailSubheaderItemWrapper;
