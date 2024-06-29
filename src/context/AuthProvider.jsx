import { createContext } from 'react'
import useAuth from '@hooks/useAuth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const auth = useAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
