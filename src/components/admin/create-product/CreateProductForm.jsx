import { useState, useEffect } from 'react'
import PlusIcon from '@components/partials/icons/PlusIcon'
import CrossIcon from '@components/partials/icons/CrossIcon'
import { motion } from 'framer-motion'
import useFirestoreCreateDocument from '@hooks/useFirestoreCreateDocument'

const CreateProductForm = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [featured, setFeatured] = useState(false)
  const [thumbnails, setThumbnails] = useState([''])
  const [submitted, setSubmitted] = useState(false)

  const newDocument = {
    title,
    description,
    price,
    quantity,
    currency,
    featured,
    thumbnails,
  }

  const { document, loading, error } = useFirestoreCreateDocument(
    'products',
    submitted ? newDocument : null
  )

  useEffect(() => {
    if (document) {
      // Resetea el estado `submitted` después de que se ha creado el documento
      setSubmitted(false)
    }
  }, [document])

  const handleAddThumbnail = () => {
    setThumbnails([...thumbnails, ''])
  }

  const handleThumbnailChange = (index, event) => {
    const newThumbnails = thumbnails.slice()
    newThumbnails[index] = event.target.value
    setThumbnails(newThumbnails)
  }

  const handleRemoveThumbnail = (index) => {
    const newThumbnails = thumbnails.filter((_, i) => i !== index)
    setThumbnails(newThumbnails)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!submitted) {
      setSubmitted(true)
    }
  }

  return (
    <form
      className="max-w-[270px] flex flex-col justify-between gap-4"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-500"
        >
          Título
        </label>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full px-2 py-1 text-gray-600 border-0 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-500"
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-500"
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full py-0 pl-2 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:ring-2 focus:ring-gray-600 sm:text-sm"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
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
          className="block text-sm font-medium leading-6 text-gray-500"
        >
          Cantidad
        </label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          className="block w-full px-2 py-1 text-gray-600 border-0 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4">
        <label
          htmlFor="featured"
          className="block text-sm font-medium leading-6 text-gray-500"
        >
          Producto destacado
        </label>
        <input
          name="featured"
          id="featured"
          type="checkbox"
          checked={featured}
          onChange={(e) => setFeatured(e.target.checked)}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <label
            htmlFor="thumbnails"
            className="block text-sm font-medium leading-6 text-gray-500"
          >
            Imágenes
          </label>
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            type="button"
            onClick={handleAddThumbnail}
            className="p-1 text-white bg-green-500 rounded-full w-fit hover:bg-green-600"
          >
            <PlusIcon width="16px" height="16px" />
          </motion.button>
        </div>

        {thumbnails.map((thumbnail, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input
              type="text"
              placeholder="URL de la imagen"
              value={thumbnail}
              onChange={(e) => handleThumbnailChange(index, e)}
              className="flex-1 px-2 py-1 text-gray-600 border-0 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6 focus:outline-none"
            />
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              type="button"
              onClick={() => handleRemoveThumbnail(index)}
              className="text-gray-400 rounded-full"
            >
              <CrossIcon width="18px" height="18px" />
            </motion.button>
          </div>
        ))}
      </div>

      <div className="self-end">
        <input
          type="submit"
          value="Crear"
          className="px-4 py-1 font-medium text-white transition duration-150 bg-green-500 rounded-md shadow cursor-pointer hover:bg-green-600 hover:shadow-gray-200"
        />
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {document && (
        <p className="text-green-500">¡Producto creado exitosamente!</p>
      )}
    </form>
  )
}

export default CreateProductForm
