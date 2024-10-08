import { useState, useContext } from 'react'
import { AppContext } from '@context/AppProvider'
import FeaturedProductsCard from '@components/home/featured-products/FeaturedProductsCard'
import FeaturedProductsTitle from '@components/home/featured-products/FeaturedProductsTitle'
import { truncateText } from '@utils'
const FeaturedProductsContainer = () => {
  const { products, loading, error } = useContext(AppContext)

  const [activeCard, setActiveCard] = useState(null)

  const featuredProducts = products?.filter((product) => product.featured)

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
