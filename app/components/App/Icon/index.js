/**
 *
 * Icon
 *
 */

import styled from 'styled-components';
import { Icon } from 'antd';
import { media } from 'utils';
import { PRIMARY_RED } from 'utils/colors';

const IconWrapper = styled(Icon)`
  &&& {
    font-size: 19px;
    color: ${PRIMARY_RED};
    display: ${props => (props.type !== 'bars' ? 'none' : 'block')};

    ${media.tablet`
    display: ${props => (props.type === 'bars' ? 'none' : 'block')};
  `};
  }
`;

export default IconWrapper;
