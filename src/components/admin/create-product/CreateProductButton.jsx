import PlusIcon from '@components/partials/icons/PlusIcon'

const CreateProductButton = () => {
  return (
    <button className="flex items-center px-2 py-1 text-base text-white transition duration-300 bg-green-600 rounded-md cursor-pointer font-roboto flex-nowrap w-fit hover:bg-green-700 hover:shadow-lg">
      <span className="">Crear</span>
      <PlusIcon width={'20px'} height={'20px'} />
    </button>
  )
}

export default CreateProductButton
