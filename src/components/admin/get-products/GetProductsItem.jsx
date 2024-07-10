import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DeleteProductModal from '@components/admin/modals/DeleteProductModal'

const GetProductsItem = ({
  id,
  title,
  description,
  featured,
  currency,
  price,
}) => {
  const [deleteIsOpen, deleteSetIsOpen] = useState(false)

  return (
    <tr
      key={id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{featured ? 'Destacado' : 'Regular'}</td>
      <td className="px-6 py-4">
        {price && currency ? '$' + price + ' ARS' : '$' + price + ' USD'}
      </td>
      <td className="flex items-center gap-2 px-6 py-4">
        <NavLink
          to={`/admin/editar/${id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Editar
        </NavLink>

        <button
          onClick={() => deleteSetIsOpen(true)}
          className="p-1 font-medium text-white transition duration-300 bg-red-600 rounded-md hover:bg-red-500"
        >
          Eliminar
        </button>

        <DeleteProductModal
          isOpen={deleteIsOpen}
          setIsOpen={deleteSetIsOpen}
          id={id}
          title={title}
        />
      </td>
    </tr>
  )
}

export default GetProductsItem
