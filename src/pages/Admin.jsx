import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const Admin = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-2 my-16">
      <div>
        <h1 className="text-lg font-medium text-gray-600 font-roboto">
          Las Meninas: Panel de administración
        </h1>
      </div>

      <div className="flex flex-col gap-8">
        <NavLink to={'/admin/productos'}>
          <motion.article
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="flex flex-col justify-between gap-6 p-4 bg-indigo-50 border-gray-100 rounded-md max-w-[320px] border shadow-sm relative hover:bg-white"
          >
            <span className="absolute px-2 py-1 text-sm text-white bg-green-600 rounded-full top-2 font-roboto right-2">
              Disponible
            </span>

            <h3 className="text-base font-medium text-gray-600 font-roboto">
              Gestión de productos
            </h3>
            <p className="text-sm text-gray-600 font-roboto">
              Consultar, crear, editar y eliminar productos.
            </p>
          </motion.article>
        </NavLink>

        <article className="flex flex-col justify-between gap-6 p-4 bg-lime-50 border-gray-100 rounded-md max-w-[320px] border shadow-sm relative">
          <span className="absolute px-2 py-1 text-sm text-white rounded-full bg-amber-600 top-2 font-roboto right-2">
            Consultar
          </span>
          <h3 className="text-base font-medium text-gray-600 font-roboto">
            Gestión de usuarios
          </h3>
          <p className="text-sm text-gray-600 font-roboto">
            Registrar otros usuarios que administren el contenido del sitio.
          </p>
        </article>

        <article className="flex flex-col justify-between gap-6 p-4 bg-rose-50 border-gray-100 rounded-md max-w-[320px] border shadow-sm relative">
          <span className="absolute px-2 py-1 text-sm text-white bg-red-600 rounded-full top-2 font-roboto right-2">
            No disponible
          </span>
          <h3 className="text-base font-medium text-gray-600 font-roboto">
            Otros contenidos...
          </h3>
          <p className="text-sm text-gray-600 font-roboto">
            Gestión de otros contenidos como imágenes y textos.
          </p>
        </article>
      </div>
    </div>
  )
}

export default Admin
