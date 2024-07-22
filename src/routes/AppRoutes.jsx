import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import mainRoutes from '@routes/mainRoutes'
import adminRoutes from '@routes/adminRoutes'
import authRoutes from '@routes/authRoutes'

const router = createBrowserRouter([
  ...mainRoutes,
  ...adminRoutes,
  ...authRoutes,
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes
