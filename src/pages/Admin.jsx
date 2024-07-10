import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import Container from '@components/layout/Container'
import GetProducts from '@components/admin/GetProducts'

const Admin = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />
        <GetProducts />
        <Footer />
      </div>
    </Container>
  )
}

export default Admin
