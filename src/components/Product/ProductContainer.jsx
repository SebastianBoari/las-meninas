import { useParams } from 'react-router-dom'
import useFirestoreGetDocument from '@hooks/useFirestoreGetDocument'

import ProductCard from '@components/Product/ProductCard'
import ProductCardSkeleton from '@components/Product/ProductCardSkeleton'

const ProductContainer = () => {
  const { id } = useParams()

  const {
    document: product,
    loading,
    error,
  } = useFirestoreGetDocument('products', id)

  if (error) {
    return (
      <div className="w-full">
        <h1>Error: {error}</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="grid items-center w-full my-32 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-6 lg:grid-cols-2 spxs:grid-cols-1">
        <ProductCardSkeleton />
      </div>
    )
  }

  return (
    <div className="grid w-full my-32 place-items-center spxs:my-8 splg:my-16 md:my-32">
      <ProductCard
        id={product.id}
        title={product.title}
        description={product.description}
        currency={product.currency}
        featured={product.featured}
        price={product.price}
        quantity={product.quantity}
        thumbnails={product.thumbnails}
      />
    </div>
  )
}

export default ProductContainer
