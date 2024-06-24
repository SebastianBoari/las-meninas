import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminPanel from '../components/AdminPanel.jsx'

const Admin = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className="w-full">
      <Navbar />
      {user ? <AdminPanel /> : <Navigate to="/iniciar-sesion" />}
      <Footer />
    </div>
  )
}

export default Admin
