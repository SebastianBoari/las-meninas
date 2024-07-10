import Header from '@components/common/Header'
import Footer from '@components/common/Footer'
import Container from '@components/layout/Container'
import GetProducts from '@components/admin/GetProducts'
import CreateProductButton from '@components/admin/create-product/CreateProductButton'
const Admin = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />

        <div className="flex flex-col gap-2 my-8">
          <div className="self-end">
            <CreateProductButton />
          </div>
          <GetProducts />
        </div>

        <Footer />
      </div>
    </Container>
  )
}

export default Admin
