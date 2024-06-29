import Navbar from '@components/Common/Navbar'
import Actions from '@components/Common/Actions'
import Footer from '@components/Common/Footer'
import Container from '@components/Layout/Container' // Background, glass and ornament
import ProductContainer from '@components/Product/ProductContainer'

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
