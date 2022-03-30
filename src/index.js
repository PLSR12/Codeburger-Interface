import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import Login from './containers/Login'
// import Register from './containers/Register'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.render(
  <>
    <Login/>
    <ToastContainer />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
