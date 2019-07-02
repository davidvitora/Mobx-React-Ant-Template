import React from 'react';
import { useObserver } from 'mobx-react-lite'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panel from './routes/panel/Panel'
import Login from './routes/login/Login'
import { PrivateRoute } from './components/util/PrivateRoute'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}


export default () => {

  return useObserver(() => (
    <Router>
      <Switch>
        <Route exact path={["/", "/login", "/register"]} render={ (props)=> (<Login {...props} fakeAuth={fakeAuth} />) }/>
        <PrivateRoute fakeAuth={fakeAuth} path="/panel" component={Panel}/>
      </Switch>
    </Router>
  ))

}

