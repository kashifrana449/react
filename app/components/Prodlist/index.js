/**
 *
 * Prodlist
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Prodlist() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Prodlist.propTypes = {};

export default memo(Prodlist);
