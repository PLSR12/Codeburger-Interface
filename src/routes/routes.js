import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Login, Register, Home, Products } from '../containers'
import PrivateRoute from '../routes/private-routes'

function AppRoutes () {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Register} />
        <PrivateRoute exact path='/home' component={Home} />
        <PrivateRoute exact path='/produtos' component={Products} />
      </Switch>
    </Router>
  )
}

export default AppRoutes
