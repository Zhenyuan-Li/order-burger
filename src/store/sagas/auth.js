import { put, delay } from 'redux-saga/effects';

import * as actions from '../actions/index';

function* logoutSaga() {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put(actions.logoutSucceed());
}

function* checkoutTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export { logoutSaga, checkoutTimeoutSaga };
