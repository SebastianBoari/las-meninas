import { useState, useContext, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AuthContext } from '@context/AuthProvider'

const SessionButton = () => {
  const [isVisible, setIsVisible] = useState(null)
  const { user, logout } = useContext(AuthContext)
  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div className="relative" ref={ref}>
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={() => setIsVisible(!isVisible)}
        whileHover={{ scale: 1.05 }}
        className="text-sm text-vanillaGray font-primary hover:underline"
      >
        Administro este sitio
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute flex flex-col gap-2 items-center w-full p-2 rounded-md bg-vanillaGray min-w-[120px]"
          >
            {!user ? (
              <li className="flex flex-col items-center w-full">
                <NavLink
                  className="w-full p-2 text-base text-center transition duration-300 rounded-md cursor-pointer font-primary text-blackened hover:text-vanillaGray hover:bg-militar"
                  to="/iniciar-sesion"
                >
                  Iniciar sesión
                </NavLink>
              </li>
            ) : (
              <>
                <li className="flex flex-col items-center w-full">
                  <button
                    className="w-full p-2 text-base text-center transition duration-300 rounded-md cursor-pointer font-primary text-blackened hover:text-vanillaGray hover:bg-red-800"
                    onClick={logout}
                  >
                    Cerrar sesión
                  </button>
                </li>
                <li className="flex flex-col items-center w-full">
                  <NavLink
                    className="w-full p-2 text-base text-center transition duration-300 rounded-md cursor-pointer font-primary text-blackened hover:text-vanillaGray hover:bg-militar"
                    to="/admin"
                  >
                    Panel
                  </NavLink>
                </li>
              </>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SessionButton
