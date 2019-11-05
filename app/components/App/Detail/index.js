/**
 *
 * Detail
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function Detail(props) {
  console.log(props);
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}
