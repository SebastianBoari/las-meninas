import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import LoginForm from '../components/LoginForm'

const Login = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="w-full h-lvh">
      {user ? <Navigate to="/admin" /> : <LoginForm />}
    </div>
  )
}

export default Login
