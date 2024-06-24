import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Admin = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      Admin
      {user ? 'PANEL DE ADMINISTRACIÓN' : <Navigate to="/iniciar-sesion" />}
    </div>
  )
}

export default Admin
