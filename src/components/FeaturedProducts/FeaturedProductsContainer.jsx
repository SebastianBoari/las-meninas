import { useState, useEffect } from 'react'
import FeaturedProductsCard from './FeaturedProductsCard'
import FeaturedProductsTitle from './FeaturedProductsTitle'

import { db } from '../../config/firebase.config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const FeaturedProductsContainer = () => {
  const [featured, setFeatured] = useState([])
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products')

        const q = query(productsCollection, where('featured', '==', true))

        const productsSnapshot = await getDocs(q)

        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setFeatured(productsList)
      } catch (error) {
        console.error(`Error obteniendo los productos:${error}`)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="flex flex-col splg:gap-16 spxs:gap-6 spxs:my-8 splg:my-12 splg:my-32">
      <FeaturedProductsTitle />

      <div className="flex items-center justify-center xl:gap-16 2xl:gap-18 spxs:flex-col lg:flex-row lg:gap-8 spxs:gap-16">
        {featured.map((product) => (
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
