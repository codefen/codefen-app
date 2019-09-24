import React from 'react';
import request from 'utils/request';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { LOGIN } from './constants';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import { loginErrorAction, loginSuccessAction } from './actions';
import { API_BASE_URL, API_USER_ACCESS } from 'utils/api';
import { push } from 'connected-react-router';

export function* login() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const requestURL = `${API_BASE_URL}${API_USER_ACCESS}&provided_email=${email}&provided_password=${password}`;
  const isEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  if (!email && !password)
    return yield put(
      loginErrorAction(<FormattedMessage {...messages.loginError} />),
    );
  if (!email)
    return yield put(
      loginErrorAction(<FormattedMessage {...messages.emailEmpty} />),
    );
  if (!password)
    return yield put(
      loginErrorAction(<FormattedMessage {...messages.passwordEmpty} />),
    );
  if (!isEmail.test(email))
    return yield put(
      loginErrorAction(<FormattedMessage {...messages.emailError} />),
    );

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error')
      return yield put(
        loginErrorAction(<FormattedMessage {...messages.loginError} />),
      );

    yield put(loginSuccessAction(response.session, response.user));
    yield put(push('/'));
  } catch (error) {
    yield put(loginErrorAction(error));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
