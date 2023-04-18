/*
 *
 * Signup actions
 *
 */

import { FORM_CHANGE, SIGN_UP } from './constants';

export function formChange(evt) {
  return {
    type: FORM_CHANGE,
    evt,
  };
}

export function signUp() {
  return {
    type: SIGN_UP,
  };
}
