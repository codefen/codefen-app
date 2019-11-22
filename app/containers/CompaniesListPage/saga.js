import { takeLatest, select, put, call } from 'redux-saga/effects';
import request from 'utils/request';
import { API_BASE_URL, API_COMPANIES_LIST } from 'utils/api';
import { format } from 'date-fns';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import { GET_COMPANIES_LIST } from './constants';
import {
  getCompaniesListErrorAction,
  getCompaniesListSuccessAction,
  getTransformCompaniesListAction,
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

    yield put(getCompaniesListSuccessAction(response.companies));

    const transformCompaniesList = response.companies.map(({ ...company }) => ({
      key: company.id,
      name: company.name,
      small_desc: company.small_desc,
      profile_media: company.profile_media,
      issues_solved: company.issues_solved,
      issues_open: company.issues_open,
      creacion: format(company.creacion, 'MM/YYYY'),
      plan: company.plan === 'open' ? 'Public hunt' : 'Private hunt',
    }));

    return yield put(getTransformCompaniesListAction(transformCompaniesList));
  } catch (error) {
    return yield put(getCompaniesListErrorAction(error));
  }
}

export default function* companiesListPageSaga() {
  yield takeLatest(GET_COMPANIES_LIST, companiesList);
}
