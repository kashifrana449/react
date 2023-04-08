/*
 *
 * Demo reducer
 *
 */
import produce from 'immer';
import { LOAD_DATA, LOAD_DATA_SUCCESS, LOAD_DATA_ERROR } from './constants';

export const initialState = {demo:false};

/* eslint-disable default-case, no-param-reassign */
const demoReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DATA:
        draft.demo = false;
        break;
      case LOAD_DATA_SUCCESS:
        draft.demo = action.demo;
        break;
      case LOAD_DATA_ERROR:
        draft.demo = false;
        break;
    }
  });

export default demoReducer;
