import Admin from '@pages/Admin'
import EditProduct from '@pages/EditProduct'
import PrivateRoute from './PrivateRoute'

const adminRoutes = [
  {
    path: '/admin',
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: '/admin/editar/:pid',
    element: (
      <PrivateRoute>
        <EditProduct />
      </PrivateRoute>
    ),
  },
]

export default adminRoutes
