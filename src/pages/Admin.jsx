import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'
import AdminPanel from '../components/AdminPanel.jsx'

const Admin = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <Navbar />
      {user ? <AdminPanel /> : <Navigate to="/iniciar-sesion" />}
      <Actions />
      <Footer />
    </div>
  )
}

export default Admin
