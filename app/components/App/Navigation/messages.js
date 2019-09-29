/*
 * Navigation Messages
 *
 * This contains all the text for the Navigation component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.App.Navigation';

export default defineMessages({
  foundIssues: {
    id: `${scope}.foundIssues`,
    defaultMessage: 'found issues',
  },
  resources: {
    id: `${scope}.resources`,
    defaultMessage: 'resources',
  },
  emailAddresses: {
    id: `${scope}.emailAddresses`,
    defaultMessage: 'email addresses',
  },
  disconnect: {
    id: `${scope}.disconnect`,
    defaultMessage: 'disconnect',
  },
});
