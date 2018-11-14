import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Routes/Login/index.js';
import Home from './Routes/Home/index.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/home' component={Home}/>
    </Switch>
  </main>
);

export default Main;
