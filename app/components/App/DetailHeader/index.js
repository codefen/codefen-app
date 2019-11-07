/**
 *
 * DetailHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DetailHeader() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DetailHeader.propTypes = {};

export default DetailHeader;
