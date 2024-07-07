import { useState } from 'react'
import useFirestoreDeleteDocument from '@hooks/useFirestoreDeleteDocument'
import Modal from '@components/Common/Modal'
import WarnIcon from '@components/Partials/Icons/WarnIcon'

const ProductTableRow = ({
  id,
  title,
  description,
  featured,
  currency,
  price,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { deleteDoc, loading, error, success } = useFirestoreDeleteDocument()

  const handleDeleteProduct = () => {
    deleteDoc('products', id)

    if (error) {
      alert('Ha ocurrido un error al intentar eliminar el producto ', error)
    }

    if (success) {
      setIsOpen(false)
    }
  }

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
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Editar
        </a>
        <button
          onClick={() => setIsOpen(true)}
          href="#"
          className="p-1 font-medium text-white transition duration-300 bg-red-600 rounded-md hover:bg-red-500"
        >
          Eliminar
        </button>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col items-center gap-2">
            <figure className="text-amber-500">
              <WarnIcon width={'64px'} height={'64px'} />
            </figure>
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-lg font-medium text-center text-blackened">
                Cuidado
              </h4>
              <p className="text-center max-w-80 text-blackened">
                Seguro que quiere eliminar el producto <strong>{title}</strong>?
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end w-full gap-6">
            <button
              className="px-4 py-2 font-medium transition duration-300 rounded text-blackened text-md hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </button>

            <button
              className="px-4 py-2 font-medium text-white transition duration-300 bg-red-800 rounded text-md hover:bg-red-600"
              onClick={handleDeleteProduct}
            >
              {loading ? 'Eliminando...' : 'Eliminar'}
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  )
}

export default ProductTableRow
