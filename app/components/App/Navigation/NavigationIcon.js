/**
 *
 * NavigationIcon
 *
 */

import styled from 'styled-components';
import { Icon } from 'antd';
import { media } from 'utils';
import { PRIMARY_RED } from 'utils/colors';

const NavigationIcon = styled(Icon)`
  &&& {
    font-size: 17px;
    margin-right: ${props => props.custom && '3.5px'};
  }
`;

export default NavigationIcon;
