/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectProducts = () =>
  createSelector(
    selectHome,
    homeState => homeState.products,
  );

export { selectHome, makeSelectProducts };
