import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { IS_LOGGED } from './constants';

export function* handleLogged() {
  return yield put(push('/login'));
}

export default function* homePageSaga() {
  yield takeLatest(IS_LOGGED, handleLogged);
}
