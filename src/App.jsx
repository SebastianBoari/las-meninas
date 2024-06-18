import Routes from './routes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import Container from './layout/Container' // Background, glass and ornament

const App = () => {
  return (
    <AuthProvider>
      <Container>
        <Routes />
      </Container>
    </AuthProvider>
  )
}

export default App
