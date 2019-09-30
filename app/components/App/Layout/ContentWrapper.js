/**
 *
 * ContentWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from 'utils';
const { Content } = Layout;

const ContentWrapper = styled(Content)`
  margin: 0px auto;
  padding: 24px;
  max-width: 940px;
  width: 100%;
  background: #fff;

  ${media.tablet`
    margin: 20px auto;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.05);
  `}
`;

export default ContentWrapper;
