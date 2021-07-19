import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './Navbar'
import Users from './Users'
import UserCreate from './UserCreate'
import UserUpdate from './UserUpdate'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/create' component={UserCreate} />
          <Route exact path='/update/:id' component={UserUpdate} />
        </Switch>
      </div>
    </Router>
  );
}
