import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Login from '../Login/Login.js';
import Reader from '../Reader/Reader.js';
import { getToken } from '../../authorization/authorization';


function checkAuth(children) {
  return function () {
    if (!getToken()) {
      return <Redirect to={{
        pathname: '/login',
      }} />
    }
    return children;
  }
}

function PrivateRoute({ children, ...rest}) {
  return <Route
    {...rest}
    render={checkAuth(children)} />
}

export default function router() {
  return (
    <Router>
      <Switch>
        <Route path="/login" >
          <Login/>
        </Route>
        <PrivateRoute path="/:selectedUser">
          <Reader />
        </PrivateRoute>
        <PrivateRoute path="/">
          <Reader />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
