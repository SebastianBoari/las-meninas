import Home from '@pages/Home'
import Products from '@pages/Products'
import Product from '@pages/Product'
import Contact from '@pages/Contact'

import NotFound from '@pages/NotFound'
import MainLayout from '@layouts/MainLayout'

const mainRoutes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'productos', element: <Products /> },
      { path: 'producto/:id', element: <Product /> },
      { path: 'contacto', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

export default mainRoutes
