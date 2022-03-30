import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import AppRoutes from './routes/routes'
import GlobalStyles from './styles/GlobalStyles'
import { UserProvider } from './hooks/UserContext'

ReactDOM.render(
  <>
    <UserProvider>
      <AppRoutes/>
    </UserProvider>
    <ToastContainer autoClose={2000} theme='colored' />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)
