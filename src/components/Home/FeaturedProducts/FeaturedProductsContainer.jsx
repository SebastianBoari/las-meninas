import { useState } from 'react'

import useFirestoreQuery from '@hooks/useFirestoreQuery'

import FeaturedProductsCard from './FeaturedProductsCard'
import FeaturedProductsTitle from './FeaturedProductsTitle'

const FeaturedProductsContainer = () => {
  const filters = [{ field: 'featured', operator: '==', value: true }]
  const { data: featuredProducts } = useFirestoreQuery('products', filters)

  const [activeCard, setActiveCard] = useState(null)

  return (
    <div className="flex flex-col splg:gap-16 spxs:gap-6 spxs:my-8 splg:my-32">
      <FeaturedProductsTitle />

      <div className="flex items-center justify-center xl:gap-16 2xl:gap-18 spxs:flex-col lg:flex-row lg:gap-8 spxs:gap-16">
        {featuredProducts.map((product) => (
          <FeaturedProductsCard
            key={product.id}
            product={product}
            isActive={activeCard === product.id}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProductsContainer
