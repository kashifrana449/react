/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import reducer from './reducer';
import saga from './saga';

import Prodlist from '../../components/Prodlist';
import { loadProducts } from './actions';
import { makeSelectProducts } from './selectors';

const key = 'home';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ width: '-webkit-fill-available' }}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function HomePage({ dispatch, products }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  console.log(products);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        console.log(loadProducts());
        dispatch(loadProducts());
    }
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="home" content="homepage" />
      </Helmet>
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
        <Tabs
          orientation="vertical"
          // variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          style={{ width: 'max-content' }}
          sx={{ borderRight: 1, borderColor: 'divider', width: 'max-content' }}
        >
          <Tab label="products" {...a11yProps(0)} />
          <Tab label="carts" {...a11yProps(1)} />
          <Tab label="posts" {...a11yProps(2)} />
          <Tab label="users" {...a11yProps(3)} />
          <Tab label="quotes" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Prodlist products={products} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Seven
        </TabPanel>
      </Box>
    </article>
  );
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
