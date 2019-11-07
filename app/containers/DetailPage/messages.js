/*
 * DetailPage Messages
 *
 * This contains all the text for the DetailPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.DetailPage';

export default defineMessages({
  researcher: {
    id: `${scope}.researcher`,
    defaultMessage: 'researcher:',
  },
  published: {
    id: `${scope}.published`,
    defaultMessage: 'published:',
  },
  company: {
    id: `${scope}.company`,
    defaultMessage: 'company:',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'status:',
  },
  risk: {
    id: `${scope}.risk`,
    defaultMessage: 'risk:',
  },
});
