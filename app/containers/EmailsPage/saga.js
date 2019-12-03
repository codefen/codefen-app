/* eslint-disable camelcase */
import { takeLatest, select, put, call } from 'redux-saga/effects';
import request from 'utils/request';
import { API_BASE_URL, API_COMPANY_EMAILS } from 'utils/api';
import { push } from 'connected-react-router';
import { COMPANIES_LIST } from 'routes';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import { GET_EMAILS, GET_SPECIFICALLY_EMAILS } from './constants';
import {
  getEmailsSuccessAction,
  getEmailsErrorAction,
  getTransformEmailsAction,
  getSpecificallyEmailsErrorAction,
  getSpecificallyEmailsSuccessAction,
  getTransformSpecificallyEmailsAction,
} from './actions';
import { makeSelectSpecificallyCompanyId } from './selectors';

export function* emails() {
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const { role, company_id } = user;
  const requestURL = `${API_BASE_URL}${API_COMPANY_EMAILS}&session=${session}&company_id=${company_id}`;

  if (role === 'admin') {
    return yield put(push(`/${COMPANIES_LIST}`));
  }

  if (!session || !user || !company_id) {
    return yield put(getEmailsErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error') {
      return yield put(getEmailsErrorAction('error'));
    }

    yield put(getEmailsSuccessAction(response.company, response.emails));

    const transformEmails = response.emails.map(({ ...email }) => ({
      key: email.id,
      email_adresses: email.email,
      reference: email.info,
    }));

    return yield put(getTransformEmailsAction(transformEmails));
  } catch (error) {
    return yield put(getEmailsErrorAction(error));
  }
}

export function* specificallyEmails() {
  const specificallyCompanyId = yield select(makeSelectSpecificallyCompanyId());
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const requestURL = `${API_BASE_URL}${API_COMPANY_EMAILS}&session=${session}&company_id=${specificallyCompanyId}`;

  if (!session || !user || !specificallyCompanyId) {
    return yield put(getSpecificallyEmailsErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (!response.emails) {
      return yield put(getSpecificallyEmailsErrorAction('error'));
    }

    yield put(getSpecificallyEmailsSuccessAction(response.emails));

    const transformSpecificallyEmails = response.emails.map(({ ...email }) => ({
      key: email.id,
      email_adresses: email.email,
      reference: email.info,
    }));

    return yield put(
      getTransformSpecificallyEmailsAction(transformSpecificallyEmails),
    );
  } catch (error) {
    return yield put(getSpecificallyEmailsErrorAction(error));
  }
}

export default function* emailsPageSaga() {
  yield takeLatest(GET_EMAILS, emails);
  yield takeLatest(GET_SPECIFICALLY_EMAILS, specificallyEmails);
}
