import PlusIcon from '@components/partials/icons/PlusIcon'

const CreateProductButton = () => {
  return (
    <button className="flex items-center gap-1 px-3 py-2 font-medium text-white transition duration-300 bg-green-600 rounded-md cursor-pointer flex-nowrap w-fit hover:bg-green-500">
      <span className="">Crear</span>
      <PlusIcon width={'24px'} height={'24px'} />
    </button>
  )
}

export default CreateProductButton
