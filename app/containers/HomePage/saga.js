/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_PRODUCTS } from './constants';
import { prodsLoaded, prodsLoadedFail } from './actions';

/**
 * Github repos request/response handler
 */
export function* getProds() {
  // Select username from store
  const requestURL = `https://dummyjson.com/products`;

  try {
    // Call our request helper (see 'utils/request')
    const prods = yield call(request, requestURL);
    yield put(prodsLoaded(prods));
  } catch (err) {
    yield put(prodsLoadedFail(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* prodsData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_PRODUCTS, getProds);
}
