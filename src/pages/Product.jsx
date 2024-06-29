import Header from '@components/Common/Header'
import Actions from '@components/Common/Actions'
import Footer from '@components/Common/Footer'
import Container from '@components/Layout/Container' // Background, glass and ornament
import ProductContainer from '@components/Product/ProductContainer'

const Product = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />
        <ProductContainer />
        <Actions />
        <Footer />
      </div>
    </Container>
  )
}

export default Product
