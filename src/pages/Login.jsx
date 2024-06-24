import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

const Login = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="w-full">
      <Navbar />
      {user ? <Navigate to="/admin" /> : <LoginForm />}
      <Actions />
      <Footer />
    </div>
  )
}

export default Login
