import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext
} from 'react'

import api from '../services/api'

interface AuthProviderProps {
  children: ReactNode
}

interface IAuthContext {
  logged: boolean
  loading: boolean
  setLoading: any
  signIn(email: string, password: string): void
  signOut(): void
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export function AuthProvider({ children }: AuthProviderProps) {
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem('@wb-dragons:logged')
    return !!isLogged
  })

  const [loading, setLoading] = useState(false)

  async function signIn(email: string, password: string) {
    if (email === 'wbdragons@gmail.com' && password === 'wbdragons') {
      localStorage.setItem('@wb-dragons:logged', 'true')
      setLogged(true)
    } else {
      alert('Senha ou usuário inválido')
    }
  }

  const signOut = async () => {
    localStorage.removeItem('@wb-dragons:logged')
    setLogged(false)
    setLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{
        logged,
        signIn,
        signOut,
        loading,
        setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext)

  return context
}

export { useAuth }
