import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import SessionButton from '@components/auth/AdminSessionButton'
import ProductsButton from '@components/admin/common/ProductsButton'

const Navbar = () => {
  return (
    <header className="flex items-center w-full h-20 gap-8 bg-white shadow">
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex items-center gap-8">
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

          <div>
            <NavLink
              to="/admin"
              className="text-sm font-medium text-gray-400 transition duration-200 hover:text-gray-500 font-roboto"
            >
              Panel de Admin.
            </NavLink>
          </div>

          <ProductsButton />
        </div>

        <div className="flex items-center">
          <SessionButton />
        </div>
      </div>
    </header>
  )
}

export default Navbar
