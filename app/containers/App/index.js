/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import demo from 'containers/Demo/Loadable';
import signup from 'containers/Signup/Loadable';
import login from 'containers/Login/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  // margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s" defaultTitle="React.js Boilerplate">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/demo" component={demo} />
          <Route path="/signup" component={signup} />
          <Route exact path="/" component={login} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
