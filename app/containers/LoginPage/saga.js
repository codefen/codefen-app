import request from 'utils/request';
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { LOGIN } from './constants';
import { makeSelectEmail, makeSelectPassword } from './selectors';
import { loginErrorAction, loginSuccessAction } from './actions';
import { API_BASE_URL, API_USER_ACCESS } from 'utils/api';

export function* login() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const requestURL = `${API_BASE_URL}${API_USER_ACCESS}&provided_email=${email}&provided_password=${password}`;

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error')
      return yield put(loginErrorAction(response.message));

    yield put(loginSuccessAction(response.session, response.user));
  } catch (error) {
    yield put(loginErrorAction(error));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
