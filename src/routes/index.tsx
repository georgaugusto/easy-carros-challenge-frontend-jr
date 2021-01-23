import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Welcome from '../pages/Welcome';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
