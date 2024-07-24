import { useState, useContext, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AuthContext } from '@context/AuthProvider'
import UserIcon from '@components/partials/icons/UserIcon'

const AdminSessionButton = () => {
  const [isVisible, setIsVisible] = useState(null)
  const { logout } = useContext(AuthContext)
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
      >
        <UserIcon width={'32px'} height={'32px'} color={'#f3f4f6'} />
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute flex flex-col gap-2 items-center w-full p-2 rounded-md bg-gray-50 min-w-[120px] right-0"
          >
            <li className="flex flex-col items-center w-full">
              <button
                className="w-full p-2 text-sm text-center transition duration-300 rounded-md cursor-pointer font-primary text-blackened hover:text-vanillaGray hover:bg-red-800 font-roboto"
                onClick={logout}
              >
                Cerrar sesión
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminSessionButton
