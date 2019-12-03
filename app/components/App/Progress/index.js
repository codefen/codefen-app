/**
 *
 * ProgressWrapper
 *
 */

import styled from 'styled-components';
import { Progress } from 'antd';
import { PRIMARY_RED } from 'utils/colors';

const ProgressWrapper = styled(Progress)`
  .ant-progress-inner {
    .ant-progress-bg {
      background-color: ${PRIMARY_RED};
    }
  }
`;

export default ProgressWrapper;
