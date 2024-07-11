import { useState } from 'react'
import DeleteProductModal from '@components/admin/modals/DeleteProductModal'

const GetProductsItem = ({
  id,
  title,
  description,
  featured,
  currency,
  price,
  quantity,
}) => {
  const [deleteIsOpen, deleteSetIsOpen] = useState(false)

  return (
    <tr key={id} className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {title}
      </th>

      <td className="px-6 py-4">{description}</td>

      <td className="px-6 py-4">{quantity}</td>

      <td className="px-6 py-4">{featured ? 'Destacado' : 'Regular'}</td>

      <td className="px-6 py-4">
        {price && currency ? '$' + price + ' ARS' : '$' + price + ' USD'}
      </td>

      <td className="px-6 py-4">
        <button className="hover:underline">Editar</button>
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => deleteSetIsOpen(true)}
          className="text-red-600 hover:underline"
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
