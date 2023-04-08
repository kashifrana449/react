/**
 *
 * Demo
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDemo from './selectors';
import {loadData} from './actions'
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Demo({
  onSubmit,
  demo
}) {
  useInjectReducer({ key: 'demo', reducer });
  useInjectSaga({ key: 'demo', saga });
  let content = <li>empty</li>
  console.log(demo)
  if (demo && demo!=null) {
    content = demo.products.map(item => {
      return <li key={item.id}>{item.title}</li>
    })
  }

  return (
    <div>
      <Helmet>
        <title>Demo</title>
        <meta name="description" content="Description of Demo" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <button onClick={onSubmit}>Load Data</button>
      <ol>
        {content}
      </ol>
    </div>
  );
}

Demo.propTypes = {
  onSubmit: PropTypes.func,
  demo: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.bool, PropTypes.string])
};

const mapStateToProps = createStructuredSelector({
  demo: makeSelectDemo(),
});

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: evt => dispatch(loadData())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Demo);
