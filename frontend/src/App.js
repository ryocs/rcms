import React, {useEffect, useState} from 'react'
import * as Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./containers/Login/Login.js";
import Dashboard from './containers/Dashboard/Dashboard.js';

async function requireAuth(nextState, replace, next) {
  const res = await axios.get('/api/users/loggedin');
  console.log(res);
  if (!Cookies.get("connect.sid")) {
    replace({
      pathname: "/login",
      state: {nextPathname: nextState.location.pathname}
    });
  } else {
    console.log("HI", Cookies.get());
  }
  next();
}

const App = () => {

  useEffect(() => {
    Cookies.set("test", 1);
    console.log(Cookies.get());
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App