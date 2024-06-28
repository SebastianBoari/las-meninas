import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import mainRoutes from './MainRoutes'
import adminRoutes from './AdminRoutes'
import authRoutes from './AuthRoutes'

const router = createBrowserRouter([
  ...mainRoutes,
  ...adminRoutes,
  ...authRoutes,
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes
