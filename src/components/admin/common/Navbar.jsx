import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import SessionButton from '@components/auth/AdminSessionButton'

const Navbar = () => {
  return (
    <header className="flex items-center w-full h-20 gap-8 bg-white shadow">
      <div className="flex items-center justify-between w-full p-4">
        <div>
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
          <ul className="flex items-center justify-between gap-8">
            <li className="text-sm font-medium hover:underline">
              <NavLink to="/admin/productos">Productos</NavLink>
            </li>

            <li className="text-sm font-medium hover:underline">
              <NavLink to="/admin/crear-producto">Crear producto</NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <SessionButton />
        </div>
      </div>
    </header>
  )
}

export default Navbar
