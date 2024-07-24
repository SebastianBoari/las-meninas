import Item from '@components/admin/get-products/GetProductsItem'

const GetProductsTable = ({ products }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-3">
            Producto
          </th>
          <th scope="col" className="px-6 py-3">
            Descripción
          </th>
          <th scope="col" className="px-6 py-3">
            Cantidad
          </th>
          <th scope="col" className="px-6 py-3">
            Destacado
          </th>
          <th scope="col" className="px-6 py-3">
            Precio
          </th>
          <th scope="col" className="px-6 py-3"></th>
          <th scope="col" className="px-6 py-3"></th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <Item
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
  )
}

export default GetProductsTable
