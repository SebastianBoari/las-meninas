import ProductTableRow from './ProductTableRow'

const ProductsTable = ({ products }) => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Descripción
              </th>
              <th scope="col" className="px-6 py-3">
                Destacado
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <ProductTableRow
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                featured={product.featured}
                currency={product.currency}
                price={product.price}
                quantity={product.quantity}
                thumbnails={product.thumbnails}
              />
            ))}
          </tbody>
        </table>
        <nav
          className="flex flex-wrap items-center justify-between p-2 pt-4 bg-gray-50 flex-column md:flex-row"
          aria-label="Table navigation"
        >
          <span className="block w-full mb-4 text-sm font-normal text-gray-500 dark:text-gray-400 md:mb-0 md:inline md:w-auto">
            Showing
            <span className="font-semibold text-gray-900 dark:text-white">
              1-1
            </span>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              1
            </span>
          </span>
          <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ProductsTable
