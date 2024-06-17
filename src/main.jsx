import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { motion } from 'framer-motion'

import Container from './layout/Container.jsx'

// Pages
import App from './App.jsx'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Product from './pages/Product.jsx'
import Error404 from './pages/Error404'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/contacto',
    element: <Contact />,
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
    path: '*',
    element: <Error404 />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Container>
        <RouterProvider router={router} />
      </Container>
    </motion.div>
  </React.StrictMode>
)
