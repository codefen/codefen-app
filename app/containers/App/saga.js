import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LOGOUT } from './constants';

export function* logout() {
  yield put(push('/'));
}

export default function* appSaga() {
  yield takeLatest(LOGOUT, logout);
}
