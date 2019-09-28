/**
 *
 * LoginForm
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Import Components
import LoginFormContainer from './LoginFormContainer';
import LoginFormActions from './LoginFormActions';
import LoginFormError from './LoginFormError';
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Link from 'components/Link';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {
  changePasswordAction,
  changeEmailAction,
  loginAction,
} from 'containers/LoginPage/actions';
import {
  makeSelectEmail,
  makeSelectPassword,
  makeSelectError,
  makeSelectIsLoading,
} from 'containers/LoginPage/selectors';

const stateSelector = createStructuredSelector({
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  error: makeSelectError(),
  isLoading: makeSelectIsLoading(),
});

export default function LoginForm() {
  const { email, password, error, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onChangeEmail = evt => dispatch(changeEmailAction(evt.target.value));
  const onChangePassword = evt =>
    dispatch(changePasswordAction(evt.target.value));
  const handleLogin = evt => dispatch(loginAction()) && evt.preventDefault();

  return (
    <LoginFormContainer>
      <Form onSubmit={handleLogin}>
        <FormattedMessage {...messages.email}>
          {emailPlaceholder => (
            <Input
              prefix={<Icon type="user" />}
              placeholder={emailPlaceholder}
              value={email}
              onChange={onChangeEmail}
              disabled={isLoading}
              type="email"
            />
          )}
        </FormattedMessage>

        <FormattedMessage {...messages.password}>
          {passwordPlaceholder => (
            <Input.Password
              prefix={<Icon type="lock" />}
              type="password"
              placeholder={passwordPlaceholder}
              value={password}
              onChange={onChangePassword}
              disabled={isLoading}
            />
          )}
        </FormattedMessage>

        {error && <LoginFormError>{error}</LoginFormError>}

        <LoginFormActions>
          <Button htmlType="submit" disabled={isLoading}>
            <FormattedMessage {...messages.access} />
          </Button>

          <Link to="/login">
            <FormattedMessage {...messages.forgotPassword} />
          </Link>
        </LoginFormActions>
      </Form>
    </LoginFormContainer>
  );
}
