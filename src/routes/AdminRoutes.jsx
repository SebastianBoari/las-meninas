import Admin from '@pages/Admin'
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
]

export default adminRoutes
