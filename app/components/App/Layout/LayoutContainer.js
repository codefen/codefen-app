/**
 *
 * LayoutContainer
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
import background from 'images/background.svg';

const LayoutContainer = styled(Layout)`
    &&& {
        &.ant-layout {
            background-image: url('${background}');
        }
    }
`;

export default LayoutContainer;
