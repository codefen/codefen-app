/* eslint-disable camelcase */
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { API_BASE_URL, API_COMPANY_ISSUE } from 'utils/api';
import request from 'utils/request';
import { push } from 'connected-react-router';
import { COMPANIES_LIST } from 'routes';
import { GET_ISSUE, GET_SPECIFICALLY_ISSUE } from './constants';
import {
  getIssueErrorAction,
  getIssueSuccessAction,
  getSpecificallyIssueErrorAction,
  getSpecificallyIssueSuccessAction,
} from './actions';
import {
  makeSelectPrepareIssueId,
  makeSelectSpecificallyCompanyId,
} from './selectors';
import { makeSelectSession, makeSelectUser } from '../App/selectors';

export function* issue() {
  const session = yield select(makeSelectSession());
  const issueId = yield select(makeSelectPrepareIssueId());
  const user = yield select(makeSelectUser());
  const { role, company_id } = user;

  const requestURL = `${API_BASE_URL}${API_COMPANY_ISSUE}&session=${session}&company_id=${company_id}&issue_id=${issueId}`;

  if (role === 'admin') {
    return yield put(push(`/${COMPANIES_LIST}`));
  }

  if (!session || !user || !company_id) {
    return yield put(getIssueErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error') {
      return yield put(getIssueErrorAction('error'));
    }

    return yield put(getIssueSuccessAction(response.issue));
  } catch (error) {
    return yield put(getIssueErrorAction(error));
  }
}

export function* specificallyIsue() {
  const session = yield select(makeSelectSession());
  const issueId = yield select(makeSelectPrepareIssueId());
  const user = yield select(makeSelectUser());
  const specificallyCompanyId = yield select(makeSelectSpecificallyCompanyId());
  const requestURL = `${API_BASE_URL}${API_COMPANY_ISSUE}&session=${session}&company_id=${specificallyCompanyId}&issue_id=${issueId}`;

  if (!session || !user || !specificallyCompanyId) {
    return yield put(getSpecificallyIssueErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error') {
      return yield put(getSpecificallyIssueErrorAction('error'));
    }

    return yield put(getSpecificallyIssueSuccessAction(response.issue));
  } catch (error) {
    return yield put(getSpecificallyIssueErrorAction(error));
  }
}

// Individual exports for testing
export default function* detailPageSaga() {
  yield takeLatest(GET_ISSUE, issue);
  yield takeLatest(GET_SPECIFICALLY_ISSUE, specificallyIsue);
}
