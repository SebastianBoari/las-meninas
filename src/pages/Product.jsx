import Navbar from '../components/Navbar'
import Actions from '../components/Actions'
import Footer from '../components/Footer'
import Container from '../layout/Container' // Background, glass and ornament
import ProductContainer from '../components/Product/ProductContainer'

const Product = () => {
  return (
    <Container>
      <div className="w-full">
        <Navbar />
        <ProductContainer />
        <Actions />
        <Footer />
      </div>
    </Container>
  )
}

export default Product
