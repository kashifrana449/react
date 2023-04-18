/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_PRODUCTS = 'boilerplate/Home/LOAD_PRODUCTS';
export const LOAD_PRODUCTS_SUCCESS = 'boilerplate/Home/LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAIL = 'boilerplate/Home/LOAD_PRODUCTS_FAIL';

export const LOAD_CATEGORIES = 'boilerplate/Home/LOAD_CATEGORIES';
export const LOAD_SMARTPHONES = 'boilerplate/Home/LOAD_SMARTPHONES';
export const LOAD_CARTS = 'boilerplate/Home/LOAD_CARTS';
