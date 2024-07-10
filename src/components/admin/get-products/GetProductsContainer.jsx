import Table from '@components/admin/get-products/GetProductsTable'
import useFirestoreGetDocuments from '@hooks/useFirestoreGetDocuments'

const GetProductsContainer = () => {
  const { data, loading, error } = useFirestoreGetDocuments('products')

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error!</div>
  }

  return (
    <div className="my-16">
      <Table products={data} />
    </div>
  )
}

export default GetProductsContainer
