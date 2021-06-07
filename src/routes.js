import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HelloWorld } from './pages';

const routes = () => (
  <Switch>
    <Route exact path="/" component={HelloWorld} />
  </Switch>
);

export default routes;
