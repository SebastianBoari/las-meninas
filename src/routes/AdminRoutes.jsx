import PrivateRoute from '@routes/PrivateRoute'
import Admin from '@pages/Admin'

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
