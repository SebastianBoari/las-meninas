import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import BackgroundGlass from './partials/BackgorundGlass/BackgroundGlass.jsx'

// Pages 
import App from './App.jsx'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Product from './pages/Product.jsx'
import Error404 from './pages/Error404'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/contacto',
    element: <Contact />
  },
  {
    path: '/productos',
    element: <Products />
  },
  {
    path: '/producto/:id',
    element: <Product />
  },
  {
    path: '*',
    element: <Error404/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundGlass>
      <RouterProvider router={router} />
    </BackgroundGlass>
  </React.StrictMode>,
)
