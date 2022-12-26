import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/customers" component={Customers} />
        </Switch>
      </Router>
    )
  }
}

export default App
