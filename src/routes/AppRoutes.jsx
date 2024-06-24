import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Product from '../pages/Product'
import Contact from '../pages/Contact'
import Admin from '../pages/Admin'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<Product />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
