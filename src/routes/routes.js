import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../containers/Login'
import Register from '../containers/Register'

function AppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
