import AdminLayout from '@layouts/AdminLayout'
import Admin from '@pages/Admin'
import GetProducts from '@pages/admin/GetProducts'
import CreateProduct from '@pages/admin/CreateProduct'
import UpdateProduct from '@pages/admin/UpdateProduct'

const adminRoutes = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Admin /> },
      { path: 'productos', element: <GetProducts /> },
      { path: 'crear-producto', element: <CreateProduct /> },
      { path: 'modificar-producto/:pid', element: <UpdateProduct /> },
    ],
  },
]

export default adminRoutes
