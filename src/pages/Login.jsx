import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '@context/AuthProvider'
import LoginForm from '@components/auth/LoginForm'

const Login = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="w-full h-lvh">
      {user ? <Navigate to="/admin" /> : <LoginForm />}
    </div>
  )
}

export default Login
