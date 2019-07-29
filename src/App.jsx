import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useObserver } from 'mobx-react-lite'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Panel from './routes/panel/Panel'
import Login from './routes/login/Login'
import { PrivateRoute } from 'Components/util/PrivateRoute'

const fakeAuth = {
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
  authenticate(cb) {
    this.isAuthenticated = true
    localStorage.setItem('isAuthenticated', true)
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    localStorage.setItem('isAuthenticated', false)
    setTimeout(cb, 100) // fake async
  }
}


const App = () => {

  return useObserver(() => (
    <Router>
      <Switch>
        <Route exact path={["/", "/login", "/register"]} render={ (props)=> (<Login {...props} fakeAuth={fakeAuth} />) }/>
        <PrivateRoute fakeAuth={fakeAuth} path="/panel" component={Panel}/>
      </Switch>
    </Router>
  ))

}

export default hot(App);