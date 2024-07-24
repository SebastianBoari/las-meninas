import { Outlet } from 'react-router-dom'
import Navbar from '@components/admin/common/Navbar'
import PrivateRoute from '@routes/PrivateRoute'
import Footer from '@components/admin/common/Footer'

const AdminLayout = () => {
  return (
    <PrivateRoute>
      <div className="w-full">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </PrivateRoute>
  )
}

export default AdminLayout
