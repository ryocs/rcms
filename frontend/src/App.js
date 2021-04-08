import React, {useEffect, useState} from 'react'
import * as Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  BrowserRouter
} from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login.js";
import Dashboard from './components/Dashboard/Dashboard.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
import {isExpired} from "./Utility/userUtility";
import history from './Utility/history.js';

const App = () => {

  useEffect(() => {
    if (isExpired()) {

    } else {
      history.push('/dashboard');
    }
  })

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute authed={true} path="/dashboard" component={Dashboard}/>
      </Switch>
    </Router>
  )
}

export default App