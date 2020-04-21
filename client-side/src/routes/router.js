import React from 'react';
import { createBrowserHistory as createHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Phone from '../components/phone';
import PageNotFound from '../components/pageNotFound';

const history = createHistory();

const Routes = () => {
  return (
    <Router history = {history} >
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/:id'>
          <Phone />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;