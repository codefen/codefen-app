import request from 'utils/request';
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { API_BASE_URL, API_COMPANY_RESOURCES } from 'utils/api';
import { GET_RESOURCES, GET_SPECIFICALLY_RESOURCES } from './constants';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import {
  getResourcesSuccessAction,
  getResourcesErrorAction,
  getTransformResourcesAction,
  getSpecificallyResourcesErrorAction,
  getSpecificallyResourcesSuccessAction,
  getTransformSpecificallyResourcesAction,
} from './actions';
import { makeSelectSpecificallyCompanyId } from './selectors';
import { getTransformSpecificallyIssuesAction } from '../IssuesPage/actions';

export function* resources() {
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const companyId = user.company_id;
  const requestURL = `${API_BASE_URL}${API_COMPANY_RESOURCES}&session=${session}&company_id=${companyId}`;

  if (!session || !user || !companyId) {
    return yield put(getResourcesErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (response.response === 'error') {
      return yield put(getResourcesErrorAction('error'));
    }

    yield put(getResourcesSuccessAction(response.company, response.resources));

    const transformResources = response.resources.map(({ ...resource }) => ({
      key: resource.id,
      main_server: resource.main_server,
      domain: resource.address_domain,
      reference: resource.server_area,
    }));

    return yield put(getTransformResourcesAction(transformResources));
  } catch (error) {
    return yield put(getResourcesErrorAction(error));
  }
}

export function* specificallyResources() {
  const specificallyCompanyId = yield select(makeSelectSpecificallyCompanyId());
  const session = yield select(makeSelectSession());
  const user = yield select(makeSelectUser());
  const requestURL = `${API_BASE_URL}${API_COMPANY_RESOURCES}&session=${session}&company_id=${specificallyCompanyId}`;

  if (!session || !user || !specificallyCompanyId) {
    return yield put(getSpecificallyResourcesErrorAction('error'));
  }

  try {
    const response = yield call(request, requestURL);

    if (!response.resources) {
      return yield put(getSpecificallyResourcesErrorAction('error'));
    }

    yield put(getSpecificallyResourcesSuccessAction(response.resources));

    const transformSpecificallyResources = response.resources.map(
      ({ ...resource }) => ({
        key: resource.id,
        main_server: resource.main_server,
        domain: resource.address_domain,
        reference: resource.server_area,
      }),
    );

    return yield put(
      getTransformSpecificallyResourcesAction(transformSpecificallyResources),
    );
  } catch (error) {
    return yield put(getSpecificallyResourcesErrorAction(error));
  }
}

export default function* resourcesPageSaga() {
  yield takeLatest(GET_RESOURCES, resources);
  yield takeLatest(GET_SPECIFICALLY_RESOURCES, specificallyResources);
}
