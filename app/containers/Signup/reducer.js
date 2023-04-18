/*
 *
 * Signup reducer
 *
 */
import produce from 'immer';
import {
  FORM_CHANGE,
  FIRST_NAME_CHANGE,
  LAST_NAME_CHANGE,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  CONFIRM_PASSWORD_CHANGE,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const signupReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FORM_CHANGE:
        const { value } = action.evt.target;
        switch (action.evt.target.id) {
          case FIRST_NAME_CHANGE:
            draft.first_name = value;
            break;
          case LAST_NAME_CHANGE:
            draft.last_name = value;
            break;
          case EMAIL_CHANGE:
            draft.email = value;
            break;
          case PASSWORD_CHANGE:
            draft.email = value;
            break;
          case CONFIRM_PASSWORD_CHANGE:
            draft.confirm_password = value;
            break;
        }
        break;
    }
  });

export default signupReducer;
