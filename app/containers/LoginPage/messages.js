/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LoginPage';

export default defineMessages({
  emailError: {
    id: `${scope}.emailError`,
    defaultMessage: 'Your email address is not valid.',
  },
  emailEmpty: {
    id: `${scope}.emailEmpty`,
    defaultMessage: 'Your email address is empty.',
  },
  passwordEmpty: {
    id: `${scope}.passwordEmpty`,
    defaultMessage: 'Your password is empty.',
  },
  loginError: {
    id: `${scope}.loginError`,
    defaultMessage: 'Invalid email or password.',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'login - codefen.com',
  },
});
