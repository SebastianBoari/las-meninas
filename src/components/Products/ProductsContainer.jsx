import { useState, useContext } from 'react'

import { AppContext } from '@context/AppProvider'
import ProductsCard from '@components/products/ProductsCard'
import ProductsCardSkeleton from '@components/products/ProductsCardSkeleton'

const ProductsContainer = () => {
  const { products, loading, error } = useContext(AppContext)

  const [activeCard, setActiveCard] = useState(null)

  const placeholderProducts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]

  if (error) {
    return (
      <div className="grid items-center w-full my-32 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-6 lg:grid-cols-2 spxs:grid-cols-1">
        <h1>Error: {error}</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="grid items-center w-full my-32 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-6 lg:grid-cols-2 spxs:grid-cols-1">
        {placeholderProducts.map((product) => (
          <ProductsCardSkeleton key={product.id} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid items-center w-full my-32 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-6 lg:grid-cols-2 spxs:grid-cols-1">
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          currency={product.currency}
          featured={product.featured}
          price={product.price}
          quantity={product.quantity}
          thumbnails={product.thumbnails}
          isActive={activeCard === product.id}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  )
}

export default ProductsContainer
