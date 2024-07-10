import Modal from '@components/common/Modal'
import WarnIcon from '@components/partials/icons/WarnIcon'
import useFirestoreDeleteDocument from '@hooks/useFirestoreDeleteDocument'

const DeleteProductModal = ({ isOpen, setIsOpen, id, title }) => {
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
  )
}

export default DeleteProductModal
