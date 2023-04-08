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

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

const makeSelectIsAuthenticated = () =>
  createSelector(
    selectLoginDomain,
    substate => substate.isAuthenticated
  );

// export default makeSelectLogin;
export { selectLoginDomain, makeSelectIsAuthenticated, makeSelectLogin };
