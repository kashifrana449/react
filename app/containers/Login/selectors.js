import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.login || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectUsername = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.username,
  );

const makeSelectPassword = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.password,
  );

const makeSelectIsAuthenticated = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.isAuthenticated,
  );

// export default makeSelectLogin;
export {
  selectLoginDomain,
  makeSelectIsAuthenticated,
  makeSelectUsername,
  makeSelectPassword,
};
