import React, { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import axios from 'axios'

export default async function PrivateRoute({component: Component, ...rest}){

    const authed = await axios.get('/api/users/loggedin', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}).data;

    return (
        <Route
          {...rest}
          render={(props) => authed === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}