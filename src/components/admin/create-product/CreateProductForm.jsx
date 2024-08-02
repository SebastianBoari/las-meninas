import { useState } from 'react'
import CrossIcon from '@components/partials/icons/PlusIcon'

const CreateProductForm = () => {
  const [thumbnails, setThumbnails] = useState([''])

  const handleAddThumbnail = () => {
    setThumbnails([...thumbnails, ''])
  }

  const handleThumbnailChange = (index, event) => {
    const newThumbnails = thumbnails.slice()
    newThumbnails[index] = event.target.value
    setThumbnails(newThumbnails)
  }

  return (
    <form className="max-w-[270px] flex flex-col justify-between gap-2">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Título
        </label>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full px-2 py-1 text-gray-600 border-0 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Descripción
        </label>
        <div>
          <textarea
            name="description"
            id="description"
            className="block w-full p-2 text-gray-600 border-0 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
            rows="3"
            cols="36"
          ></textarea>
        </div>
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Precio
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="0.00"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full py-0 pl-2 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:ring-2 focus:ring-gray-600 sm:text-sm"
            >
              <option>USD</option>
              <option>ARS</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Cantidad
        </label>

        <input
          type="text"
          name="quantity"
          id="quantity"
          className="block w-full px-2 py-1 text-gray-600 border-0 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <label
          htmlFor="featured"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Producto destacado
        </label>

        <input name="featured" id="featured" type="checkbox" />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="thumbnails"
          className="block text-sm font-medium leading-6 text-gray-600"
        >
          Imágenes
        </label>
        {thumbnails.map((thumbnail, index) => (
          <input
            key={index}
            type="text"
            placeholder="URL de la imagen"
            value={thumbnail}
            onChange={(e) => handleThumbnailChange(index, e)}
            className="block w-full px-2 py-1 mt-2 text-gray-600 border-0 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        ))}
        <button
          type="button"
          onClick={handleAddThumbnail}
          className="p-1 text-white bg-gray-600 rounded-full w-fit"
        >
          <CrossIcon width="18px" height="18px" />
        </button>
      </div>
    </form>
  )
}

export default CreateProductForm
