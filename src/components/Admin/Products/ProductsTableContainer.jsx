import ProductsTable from '@components/Admin/Products/ProductsTable'
import useFirestoreQuery from '@hooks/useFirestoreQuery'

const ProductsTableContainer = () => {
  const { data, loading, error } = useFirestoreQuery('products')

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error!</div>
  }

  return (
    <div>
      <ProductsTable products={data} />
    </div>
  )
}

export default ProductsTableContainer
