/**
 *
 * Asynchronously loads the component for Prodlist
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
