import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePageComponent from './components/Index';
import RegisterPage from './containers/RegisterPage';
import LoginPage from './containers/LoginPage';

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePageComponent}/>
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default (routes);
