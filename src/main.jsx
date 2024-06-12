import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Container from './Layout/Container.jsx'

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

    <Container>
    
      <RouterProvider router={router} />
  
    </Container>

  </React.StrictMode>,
)
