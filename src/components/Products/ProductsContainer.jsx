import ProductsCard from './ProductsCard'
import ProductsCardSkeleton from './ProductsCardSkeleton.jsx'
import { useState, useEffect } from 'react'

import { db } from '../../firebase/firebase'
import { collection, getDocs, query } from 'firebase/firestore'

const ProductsContainer = () => {
  const [products, setProducts] = useState(null)
  const [activeCard, setActiveCard] = useState(null)

  const placeholderProducts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products')

        const q = query(productsCollection)

        const productsSnapshot = await getDocs(q)

        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProducts(productsList)
      } catch (error) {
        console.error(`Error obteniendo los productos: ${error}`)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid items-center w-full my-32 xl:grid-cols-3 justify-items-center gap-x-2 gap-y-6 lg:grid-cols-2 spxs:grid-cols-1">
      {products
        ? products.map((product) => (
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
          ))
        : placeholderProducts.map((product) => (
            <ProductsCardSkeleton key={product.id} />
          ))}
    </div>
  )
}

export default ProductsContainer
