import { takeLatest, call, put, select } from 'redux-saga/effects';

import { makeSelectPassword, makeSelectUsername } from './selectors';

import { logInSuccess, logInFail } from './actions';

import { LOG_IN } from './constants';

import request from '../../utils/request';

export function* logIn() {
  console.log('login saga is called');
  const url = 'http://127.0.0.1:8010/auth/jwt/create/';

  const payload = {
    username: yield select(makeSelectUsername()),
    password: yield select(makeSelectPassword()),
  };
  const option = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const resp = yield call(request, url, option);
    yield put(logInSuccess(resp));
  } catch (err) {
    yield put(logInFail(err));
  }
}

// Individual exports for testing
export default function* loginSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOG_IN, logIn);
}
