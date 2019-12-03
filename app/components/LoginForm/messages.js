/*
 * LoginForm Messages
 *
 * This contains all the text for the LoginForm component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginForm';

export default defineMessages({
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot password?',
  },
  access: {
    id: `${scope}.access`,
    defaultMessage: 'access',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Password',
  },
});
