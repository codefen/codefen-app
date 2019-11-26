import { put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { COMPANIES_LIST, ISSUES, LOGIN } from 'routes';
import { LOGOUT, CHECK_USER_LOGGED, CHECK_ADMIN_LOGGED } from './constants';
import {
  makeSelectIsLogged,
  makeSelectSession,
  makeSelectUser,
} from './selectors';

export function* logout() {
  yield put(push('/'));
}

export function* checkUserLogged() {
  const isLogged = yield select(makeSelectIsLogged());
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const { role } = user;

  if (!isLogged || !session || !user) {
    yield put(push(`${LOGIN}`));
  }

  if (isLogged && session && role === 'admin') {
    yield put(push(`${COMPANIES_LIST}`));
  }

  if (isLogged && session) {
    yield put(push('/issues'));
  }
}

export function* checkAdminLogged() {
  const isLogged = yield select(makeSelectIsLogged());
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());

  if (!isLogged || !session || user.role !== 'admin') {
    yield put(push('/login'));
  }
}

export default function* appSaga() {
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(CHECK_USER_LOGGED, checkUserLogged);
  yield takeLatest(CHECK_ADMIN_LOGGED, checkAdminLogged);
}
