import Header from '@components/common/Header'
import Actions from '@components/common/Actions'
import Footer from '@components/common/Footer'
import Container from '@components/layout/Container' // Background, glass and ornament
import ProductContainer from '@components/product/ProductContainer'

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
