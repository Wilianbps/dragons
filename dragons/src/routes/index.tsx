import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './authroutes'
import { useAuth } from '../hooks/auth'

export function RoutesApp() {
  const { logged } = useAuth()
  return (
    <BrowserRouter>{logged ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
