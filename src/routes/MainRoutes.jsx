import Home from '../pages/Home'
import Products from '../pages/Products'
import Product from '../pages/Product'
import Contact from '../pages/Contact'

import NotFound from '../pages/NotFound'

const mainRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/productos',
    element: <Products />,
  },
  {
    path: '/producto/:id',
    element: <Product />,
  },
  {
    path: '/contacto',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default mainRoutes
