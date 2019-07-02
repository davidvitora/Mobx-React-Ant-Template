import React from 'react';
import { useObserver } from 'mobx-react-lite'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Panel from './routes/panel/Panel'
import Login from './routes/login/Login'

export default () => {

  return useObserver(() => (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/Panel" component={Panel}/>
      </Switch>
    </Router>
  ))
}

