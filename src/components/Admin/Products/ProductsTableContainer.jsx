import ProductsTable from '@components/admin/products/ProductsTable'
import useFirestoreGetDocuments from '@hooks/useFirestoreGetDocuments'

const ProductsTableContainer = () => {
  const { data, loading, error } = useFirestoreGetDocuments('products')

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
