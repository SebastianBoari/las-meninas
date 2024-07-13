import PlusIcon from '@components/partials/icons/PlusIcon'
import { motion } from 'framer-motion'

const CreateProductButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <button className="flex items-center gap-2 p-2 text-sm font-medium text-white uppercase transition duration-300 bg-green-700 rounded-lg cursor-pointer font-roboto flex-nowrap w-fit hover:bg-green-600 hover:shadow-lg">
        <span>Crear producto</span>
        <div className="block text-green-700 bg-white rounded-full">
          <PlusIcon width={'18px'} height={'18px'} />
        </div>
      </button>
    </motion.div>
  )
}

export default CreateProductButton
