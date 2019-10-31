/*
 * ResourcesPage Messages
 *
 * This contains all the text for the ResourcesPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ResourcesPage';

export default defineMessages({
  main_server: {
    id: `${scope}.main_server`,
    defaultMessage: 'main server',
  },
  domain: {
    id: `${scope}.domain`,
    defaultMessage: 'domain',
  },
  reference: {
    id: `${scope}.reference`,
    defaultMessage: 'reference',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'resources - codefen.com',
  },
  scopeAndResources: {
    id: `${scope}.scopeAndResources`,
    defaultMessage: 'scope & resources',
  },
});
