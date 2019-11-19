import { takeLatest, select, put, call } from 'redux-saga/effects';
import request from 'utils/request';
import { API_BASE_URL, API_COMPANIES_LIST } from 'utils/api';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import { GET_COMPANIES_LIST } from './constants';
import {
  getCompaniesListErrorAction,
  getCompaniesListSuccessAction,
} from './actions';

export function* companiesList() {
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const userRole = user.role;
  const requestURL = `${API_BASE_URL}${API_COMPANIES_LIST}&session=${session}`;

  if (userRole !== 'admin' || !session || !user) {
    return yield put(getCompaniesListErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error') {
      return yield put(getCompaniesListErrorAction('error'));
    }

    return yield put(getCompaniesListSuccessAction(response.companies));
  } catch (error) {
    return yield put(getCompaniesListErrorAction(error));
  }
}

export default function* companiesListPageSaga() {
  yield takeLatest(GET_COMPANIES_LIST, companiesList);
}
