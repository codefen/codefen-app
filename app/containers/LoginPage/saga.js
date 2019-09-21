import request from 'utils/request';
import { takeLatest } from 'redux-saga/effects';
import { LOGIN } from './constants';

export function* login() {
  console.log('test');
}

export default function* loginPageSaga() {
  // yield takeLatest(LOGIN, login);
}
