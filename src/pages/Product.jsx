import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'

import ProductContainer from '../components/Product/ProductContainer'

const Product = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ProductContainer />
      <Actions />
      <Footer />
    </div>
  )
}

export default Product
