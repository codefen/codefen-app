/**
 *
 * HeaderWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;
import { PRIMARY_RED } from 'utils/colors';

const HeaderWrapper = styled(Header)`
  background: #fff;
  padding: 0;
`;

export default HeaderWrapper;
