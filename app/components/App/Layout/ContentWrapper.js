/**
 *
 * ContentWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
const { Content } = Layout;

const ContentWrapper = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280;
`;

export default ContentWrapper;
