import { takeLatest, select, put, call } from 'redux-saga/effects';
import { API_BASE_URL, API_COMPANY_ISSUE } from 'utils/api';
import request from 'utils/request';
import { GET_ISSUE } from './constants';
import { getIssueErrorAction, getIssueSuccessAction } from './actions';
import { makeSelectPrepareIssueId } from './selectors';
import { makeSelectSession, makeSelectUser } from '../App/selectors';

export function* issue() {
  const session = yield select(makeSelectSession());
  const issueId = yield select(makeSelectPrepareIssueId());
  const user = yield select(makeSelectUser());
  const companyId = user.company_id;
  const requestURL = `${API_BASE_URL}${API_COMPANY_ISSUE}&session=${session}&company_id=${companyId}&issue_id=${issueId}`;

  if (!session || !user || !companyId) {
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

// Individual exports for testing
export default function* detailPageSaga() {
  yield takeLatest(GET_ISSUE, issue);
}
