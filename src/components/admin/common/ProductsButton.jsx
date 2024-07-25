import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ArrowIcon from '@components/partials/icons/ArrowIcon'
import { NavLink } from 'react-router-dom'

const ProductsButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className={`flex items-center gap-2 p-3 text-sm font-medium text-gray-400 transition duration-200 border border-gray-100 rounded-md hover:text-gray-500 font-roboto hover:bg-gray-100 hover:shadow-sm ${
          isVisible
            ? 'text-gray-500 bg-gray-50 shadow-sm border-gray-50'
            : 'text-gray-400 border-gray-100 hover:text-gray-500 hover:bg-gray-100 hover:shadow-sm'
        }`}
      >
        Productos
        <motion.div
          animate={{ rotate: isVisible ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowIcon width={'12px'} height={'12px'} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute p-2 bg-white border border-gray-100 rounded-md top-12"
          >
            <div className="flex flex-col">
              <NavLink
                to="/admin/productos"
                className="py-2 text-sm font-medium text-center text-gray-400 rounded-md hover:bg-gray-100 font-roboto w-28 hover:text-gray-600"
              >
                Ver productos
              </NavLink>

              <NavLink
                to="/admin/crear-producto"
                className="py-2 text-sm font-medium text-center text-gray-400 rounded-md hover:bg-gray-100 font-roboto w-28 hover:text-gray-600"
              >
                Crear producto
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductsButton
