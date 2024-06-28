import { useState, useEffect } from 'react'
import {
  loginUser,
  logoutUser,
  subscribeToAuthChanges,
} from '../firebase/services/AuthService'

const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email, password) => {
    try {
      await loginUser(email, password)
    } catch (error) {
      console.error('Error al iniciar sesión:', error) // TODO [PRODUCTION]: Quit console.error
      return { code: error.code, message: error.message }
    }
  }

  const logout = async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.error('Error al cerrar sesión:', error) // TODO [PRODUCTION]: Quit console.error
      return { code: error.code, message: error.message }
    }
  }

  return { user, login, logout }
}

export default useAuth
