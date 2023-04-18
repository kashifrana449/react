/*
 *
 * Login actions
 *
 */

import {
  LOG_IN,
  USERNAME_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './constants';

export function usernameChange(username) {
  return {
    type: USERNAME_CHANGE,
    username,
  };
}

export function passwordChange(password) {
  return {
    type: PASSWORD_CHANGE,
    password,
  };
}

export function logIn() {
  return {
    type: LOG_IN,
  };
}

export function logInSuccess(resp) {
  return {
    type: LOGIN_SUCCESS,
    resp,
  };
}

export function logInFail(err) {
  return {
    type: LOGIN_FAIL,
    err,
  };
}
