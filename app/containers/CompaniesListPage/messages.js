/*
 * CompaniesListPage Messages
 *
 * This contains all the text for the CompaniesListPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.CompaniesListPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'companies list - codefen.com',
  },
  companiesList: {
    id: `${scope}.companiesList`,
    defaultMessage: 'companies list',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'name',
  },
  issuesOpened: {
    id: `${scope}.issuesOpened`,
    defaultMessage: 'issues opened',
  },
  issuesSolved: {
    id: `${scope}.issuesSolved`,
    defaultMessage: 'issues solved',
  },
  creation: {
    id: `${scope}.creation`,
    defaultMessage: 'creation',
  },
  plan: {
    id: `${scope}.plan`,
    defaultMessage: 'plan',
  },
});
