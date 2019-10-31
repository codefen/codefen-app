import { put, takeLatest, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOGOUT, CHECK_USER_LOGGED } from './constants';
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

  if (!isLogged || !session || !user) {
    yield put(push('/login'));
  }
}

export default function* appSaga() {
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(CHECK_USER_LOGGED, checkUserLogged);
}
