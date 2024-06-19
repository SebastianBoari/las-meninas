import { useState, useEffect } from 'react'
import FeaturedProducts from './FeaturedProducts'
import FeaturedProductsTitle from './FeaturedProductsTitle'

import { db } from '../../config/firebase.config.js'
import { collection, getDocs, query, where } from 'firebase/firestore'

const FeaturedProductsContainer = () => {
  const [featured, setFeatured] = useState([])

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
    <div className="flex flex-col gap-16 my-32">
      <FeaturedProductsTitle />

      <div className="flex items-center justify-center gap-16">
        {featured.map((product) => (
          <FeaturedProducts key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProductsContainer
