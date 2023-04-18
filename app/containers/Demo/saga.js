// import { take, call, put, select } from 'redux-saga/effects';

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { responseLoad, repoLoadingError } from './actions';
import { LOAD_DATA } from './constants';

export function* getData() {
  // Select username from store
  console.log('load data saga is called');
  const requestURL = 'https://dummyjson.com/products';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(responseLoad(data));
  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* demoSaga() {
  // See example in containers/HomePage/saga.js
  console.log(LOAD_DATA);
  yield takeLatest(LOAD_DATA, getData);
}
