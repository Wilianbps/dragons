import { DragonsProvider } from './hooks/useDragons'
import { AuthProvider } from './hooks/auth'
import { useAuth } from './hooks/auth'
import { Home } from './pages/Home'

import { GlobalStyle } from './styles/global'
import { Login } from './pages/Login'
import { RoutesApp } from './routes'

function App() {
  const { logged } = useAuth()
  return (
    <AuthProvider>
      <DragonsProvider>
        <GlobalStyle />
        <RoutesApp />
      </DragonsProvider>
    </AuthProvider>
  )
}
export default App
