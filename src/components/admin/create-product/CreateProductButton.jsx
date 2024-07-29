import { NavLink } from 'react-router-dom'

const CreateProductButton = () => {
  return (
    <NavLink
      className="px-4 py-2 mx-4 my-8 text-sm font-medium transition duration-200 bg-green-600 rounded-md hover:bg-green-500 text-gray-50 font-roboto hover:text-white"
      to="/admin/crear-producto"
    >
      Crear producto
    </NavLink>
  )
}

export default CreateProductButton
