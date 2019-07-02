import { Route, Redirect, } from "react-router-dom";
import React from 'react'

const PrivateRoute = ({ component: Component, fakeAuth, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

export { PrivateRoute };