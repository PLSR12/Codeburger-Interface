import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'

import PropTypes from 'prop-types'

function PrivateRoute ({ component, ...rest }) {
  const user = localStorage.getItem('codeburger:userData')

  if (!user) {
    return <Redirect to='/login' />
  }
  return (
    <>
      <Header />
      <Route {...rest} component={component} />
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
