import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ProductContainer = () => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const oneItem = doc(db, 'products', id)

      try {
        const snapshot = await getDoc(oneItem)
        if (snapshot.exists()) {
          const docs = snapshot.data()
          setProduct(docs)
        } else {
          console.log('No such document!')
        }
      } catch (error) {
        console.error(error)
        alert(
          'Ups, error al intentar mostrar información. Por favor, vuelva a intentarlo más tarde.'
        )
      }
    }

    fetchProducts()
  }, [id])

  return (
    <div className="grid w-full my-32 place-items-center spxs:my-8 splg:my-16 md:my-32">
      {product ? (
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
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  )
}

export default ProductContainer
