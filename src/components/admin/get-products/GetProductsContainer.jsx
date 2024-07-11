import { useState } from 'react'
import Table from '@components/admin/get-products/GetProductsTable'
import useFirestoreGetDocuments from '@hooks/useFirestoreGetDocuments'

const GetProductsContainer = () => {
  const {
    data: products,
    loading,
    error,
  } = useFirestoreGetDocuments('products')

  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )
  const totalPages = Math.ceil(products.length / productsPerPage)

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error!</div>
  }

  return (
    <div className="font-roboto">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table products={currentProducts} />
        <nav
          className="flex flex-wrap items-center justify-between p-2 pt-4 bg-gray-50 flex-column md:flex-row"
          aria-label="Table navigation"
        >
          <span className="block w-full mb-4 text-sm font-normal text-gray-500 md:mb-0 md:inline md:w-auto">
            Mostrando
            <span className="px-1 font-semibold text-gray-900">
              {indexOfFirstProduct + 1}-
              {Math.min(indexOfLastProduct, products.length)}
            </span>
            de
            <span className="px-1 font-semibold text-gray-900">
              {products.length}
            </span>
            productos
          </span>

          <ul className="inline-flex h-8 -space-x-px text-sm rtl:space-x-reverse">
            <li>
              <button
                onClick={handlePreviousPage}
                className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 ms-0 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                disabled={currentPage === 1}
              >
                Anterior
              </button>
            </li>

            {[...Array(totalPages).keys()].map((page) => (
              <li key={page + 1}>
                <button
                  onClick={() => setCurrentPage(page + 1)}
                  className={`flex items-center justify-center h-8 px-3 leading-tight ${currentPage === page + 1 ? 'text-gray-900 bg-gray-300' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleNextPage}
                className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                disabled={currentPage === totalPages}
              >
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default GetProductsContainer
