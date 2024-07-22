import { Outlet } from 'react-router-dom'
import Container from '@components/layout/Container' // Background, glass and ornament
import Header from '@components/common/Header'
import Actions from '@components/common/Actions'
import Footer from '@components/common/Footer'

const MainLayout = () => {
  return (
    <Container>
      <div className="w-full">
        <Header />
        <Outlet />
        <Actions />
        <Footer />
      </div>
    </Container>
  )
}

export default MainLayout
