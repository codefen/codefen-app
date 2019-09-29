import { GET_ISSUES } from './constants';
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import {
  getIssuesErrorAction,
  getIssuesSuccessAction,
  getTransformIssuesAction,
} from './actions';
import { API_BASE_URL, API_COMPANY_ISSUES } from 'utils/api';
import request from 'utils/request';

export function* issues() {
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const companyId = user.company_id;
  const requestURL = `${API_BASE_URL}${API_COMPANY_ISSUES}&session=${session}&company_id=${companyId}`;

  if (!session || !user || !companyId)
    return yield put(getIssuesErrorAction('error'));

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error')
      return yield put(getIssuesErrorAction('error'));

    yield put(getIssuesSuccessAction(response.company, response.issues));

    let index = 1;
    const transformIssues = response.issues.map(({ ...issue }) => ({
      key: index++,
      relevance: parseInt(issue.risk_level, 10),
      issue: issue.name,
      status: issue.solved,
      researcher: `@${issue.researcher_username}`,
    }));

    yield put(getTransformIssuesAction(transformIssues));
  } catch (error) {
    // yield put(loginErrorAction(error));
    console.log(error);
  }
}

export default function* issuesPageSaga() {
  yield takeLatest(GET_ISSUES, issues);
}
