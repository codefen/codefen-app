import request from 'utils/request';
import { API_BASE_URL, API_COMPANY_ISSUES } from 'utils/api';
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { GET_ISSUES, GET_SPECIFICALLY_ISSUES } from './constants';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import {
  getIssuesErrorAction,
  getIssuesSuccessAction,
  getTransformIssuesAction,
  getSpecificallyIssuesErrorAction,
  getSpecificallyIssuesSuccessAction,
  getTransformSpecificallyIssuesAction,
} from './actions';
import { makeSelectSpecificallyCompanyId } from './selectors';

export function* issues() {
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const companyId = user.company_id;
  const requestURL = `${API_BASE_URL}${API_COMPANY_ISSUES}&session=${session}&company_id=${companyId}`;

  if (!session || !user || !companyId) {
    return yield put(getIssuesErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error') {
      return yield put(getIssuesErrorAction('error'));
    }

    yield put(getIssuesSuccessAction(response.company, response.issues));

    const transformIssues = response.issues.map(({ ...issue }) => ({
      key: issue.id,
      relevance: parseInt(issue.risk_level, 10),
      issue: issue.name,
      status: issue.solved,
      researcher: `@${issue.researcher_username}`,
    }));

    return yield put(getTransformIssuesAction(transformIssues));
  } catch (error) {
    return yield put(getIssuesErrorAction(error));
  }
}

export function* specificallyIssues() {
  const specificallyCompanyId = yield select(makeSelectSpecificallyCompanyId());
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const requestURL = `${API_BASE_URL}${API_COMPANY_ISSUES}&session=${session}&company_id=${specificallyCompanyId}`;

  if (!session || !user || !specificallyCompanyId) {
    return yield put(getSpecificallyIssuesErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (!response.issues) {
      return yield put(getSpecificallyIssuesErrorAction('error'));
    }

    yield put(getSpecificallyIssuesSuccessAction(response.issues));

    const transformSpecificallyIssues = response.issues.map(({ ...issue }) => ({
      key: issue.id,
      relevance: parseInt(issue.risk_level, 10),
      issue: issue.name,
      status: issue.solved,
      researcher: `@${issue.researcher_username}`,
    }));

    return yield put(
      getTransformSpecificallyIssuesAction(transformSpecificallyIssues),
    );
  } catch (error) {
    return yield put(getSpecificallyIssuesErrorAction(error));
  }
}

export default function* issuesPageSaga() {
  yield takeLatest(GET_ISSUES, issues);
  yield takeLatest(GET_SPECIFICALLY_ISSUES, specificallyIssues);
}
