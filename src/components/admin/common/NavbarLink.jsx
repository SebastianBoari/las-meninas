import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const NavbarLink = ({ path, text }) => {
  return (
    <NavLink to={path}>
      <motion.span className="text-sm font-medium text-gray-400 transition duration-200 hover:text-gray-500 font-roboto">
        {text}
      </motion.span>
    </NavLink>
  )
}

export default NavbarLink
