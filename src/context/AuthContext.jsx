import { createContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [test, setTest] = useState(false)

  return (
    <AuthContext.Provider value={{ test, setTest }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
