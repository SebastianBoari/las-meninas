import { Outlet } from 'react-router-dom'
import Navbar from '@components/admin/common/Navbar'
import PrivateRoute from '@routes/PrivateRoute'

const AdminLayout = () => {
  return (
    <PrivateRoute>
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </PrivateRoute>
  )
}

export default AdminLayout
