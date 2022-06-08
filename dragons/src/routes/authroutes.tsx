import {  Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { useAuth } from '../hooks/auth'

export function AuthRoutes() {
  
  return (
 
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

  )
}
