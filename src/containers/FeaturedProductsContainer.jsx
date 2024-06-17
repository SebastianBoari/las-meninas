import { useState, useEffect } from 'react'
import FeaturedProducts from '../components/FeaturedProducts.jsx'

import { db } from '../config/firebase.config.js'
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
    <div className="flex flex-col mt-16">
      <div className="grid place-items-center">
        <h2 className="font-serif text-4xl not-italic font-normal text-vanillaGray">
          Destacados
        </h2>
      </div>

      <div className="flex items-center justify-center gap-16 mt-8">
        {featured.map((product) => (
          <FeaturedProducts key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProductsContainer
