import { createContext, useState, useEffect } from 'react'

import { auth } from '../firebase/firebase'

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const logoutUser = async () => {
    return await signOut(auth)
  }

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email, password) => {
    try {
      await loginUser(email, password)
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      return { code: error.code, message: error.message }
    }
  }

  const logout = async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.error('Error al cerrar sesión:', error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
