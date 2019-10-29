import { GET_EMAILS } from './constants';
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import request from 'utils/request';
import { API_BASE_URL, API_COMPANY_EMAILS } from 'utils/api';
import {
  getEmailsSuccessAction,
  getEmailsErrorAction,
  getTransformEmailsAction,
} from './actions';

export function* emails() {
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const companyId = user.company_id;
  const requestURL = `${API_BASE_URL}${API_COMPANY_EMAILS}&session=${session}&company_id=${companyId}`;

  if (!session || !user || !companyId)
    return yield put(getEmailsErrorAction('error'));

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error')
      return yield put(getEmailsErrorAction('error'));

    yield put(getEmailsSuccessAction(response.company, response.emails));

    const transformEmails = response.emails.map(({ ...email }) => ({
      key: email.id,
      email_adresses: email.email,
      reference: email.info,
    }));

    yield put(getTransformEmailsAction(transformEmails));
  } catch (error) {
    // yield put(loginErrorAction(error));
    console.log(error);
  }
}

export default function* emailsPageSaga() {
  yield takeLatest(GET_EMAILS, emails);
}
