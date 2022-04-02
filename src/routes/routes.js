import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Login, Register, Home, Products, Cart, Admin } from '../containers'
import PrivateRoute from '../routes/private-routes'

function AppRoutes () {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/cadastro' component={Register} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/produtos' component={Products} />
        <PrivateRoute exact path='/carrinho' component={Cart} />
        <Route exact path='/pedidos' component={Admin} />

      </Switch>
    </Router>
  )
}

export default AppRoutes
