import ReactDom from 'react-dom'
import CrossIcon from '@components/Partials/Icons/CrossIcon'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return ReactDom.createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70">
      <div className="fixed z-50 p-2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md top-1/2 left-1/2 min-w-96">
        <div className="flex flex-col items-center justify-between w-full h-full">
          <button
            onClick={() => onClose()}
            className="self-end p-1 transition duration-300 rounded-full text-blackened hover:text-red-600"
          >
            <CrossIcon width={'24px'} height={'24px'} />
          </button>

          <div className="flex flex-col items-center justify-between w-full gap-6 p-2">
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
