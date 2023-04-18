/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';

export const initialState = {
  // isAuthenticated: localStorage.getItem('is_authenticated') || false,
  isAuthenticated: false,
  access: localStorage.getItem('access') || '',
  access: localStorage.getItem('refresh') || '',
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case USERNAME_CHANGE:
        draft.username = action.username;
        break;
      case PASSWORD_CHANGE:
        draft.password = action.password;
        break;
      case LOGIN_SUCCESS:
        localStorage.setItem('access', action.resp.access);
        localStorage.setItem('refrsh', action.resp.refresh);
        localStorage.setItem('is_authenticated', true);
        draft.isAuthenticated = true;
        break;
      case LOGIN_FAIL:
        localStorage.setItem('is_authenticated', false);
    }
  });

export default loginReducer;
