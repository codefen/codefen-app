/*
 * PageTable Messages
 *
 * This contains all the text for the Table component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.App.Page';

export default defineMessages({
  relevance: {
    id: `${scope}.relevance`,
    defaultMessage: 'relevance',
  },
  issue: {
    id: `${scope}.issue`,
    defaultMessage: 'issue',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'status',
  },
  researcher: {
    id: `${scope}.researcher`,
    defaultMessage: 'researcher',
  },
  pageFooter: {
    id: `${scope}.pageFooter`,
    defaultMessage:
      'Welcome to the vulnerability index. This section exclusively shows all peer-reviewed & confirmed vulnerabilities. Please remember to update the status of the issues once solved!',
  },
});
