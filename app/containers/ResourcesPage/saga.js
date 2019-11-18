import request from 'utils/request';
import { takeLatest, select, put, call } from 'redux-saga/effects';
import { API_BASE_URL, API_COMPANY_RESOURCES } from 'utils/api';
import { GET_RESOURCES } from './constants';
import { makeSelectSession, makeSelectUser } from '../App/selectors';
import {
  getResourcesSuccessAction,
  getResourcesErrorAction,
  getTransformResourcesAction,
} from './actions';

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

export default function* resourcesPageSaga() {
  yield takeLatest(GET_RESOURCES, resources);
}
