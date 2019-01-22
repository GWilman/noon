import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Admin from '../components/Admin';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/admin" component={ Admin } />
    </Switch>
  );
};

export default Routes;
