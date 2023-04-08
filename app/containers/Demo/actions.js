/*
 *
 * Demo actions
 *
 */

import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from './constants';

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function responseLoad(data) {
  return {
    type: LOAD_DATA_SUCCESS,
    demo: data
  };
}

export function repoLoadingError(err) {
  return {
    type: LOAD_DATA_ERROR,
  };
}
