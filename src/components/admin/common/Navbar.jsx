import { useEffect, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [param, setParam] = useState('')
  const location = useLocation()

  useEffect(() => {
    setParam(location.pathname)
  }, [location])

  return (
    <header className="flex items-center w-full h-20 gap-8 bg-white drop-shadow">
      <div className="p-4">
        <a target="_blanc" href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="p-2 rounded-md bg-militar w-fit font-primary text-vanilla"
          >
            <span>Las Meninas</span>
          </motion.div>
        </a>
      </div>

      <nav>
        <ul className="flex items-center w-full gap-8">
          <li className="flex items-center h-20">
            <NavLink
              className={
                param === '/admin/productos'
                  ? 'flex items-center justify-center h-20 text-sm font-normal text-gray-600 transition duration-150 border-b-2 border-sky-600 font-roboto hover:text-gray-400 hover:border-b-2 hover:border-gray-300'
                  : 'flex items-center justify-center h-20 text-sm font-normal text-gray-400 transition duration-150 border-b-2 border-white font-roboto hover:text-gray-500 hover:border-b-2 hover:border-gray-300'
              }
              to="/admin/productos"
            >
              Productos
            </NavLink>
          </li>

          <li className="flex items-center h-20">
            <NavLink
              className={
                param === '/admin/crear-producto'
                  ? 'flex items-center justify-center h-20 text-sm font-normal text-gray-600 transition duration-150 border-b-2 border-sky-600 font-roboto hover:text-gray-400 hover:border-b-2 hover:border-gray-300'
                  : 'flex items-center justify-center h-20 text-sm font-normal text-gray-400 transition duration-150 border-b-2 border-white font-roboto hover:text-gray-500 hover:border-b-2 hover:border-gray-300'
              }
              to="/admin/crear-producto"
            >
              Crear producto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
