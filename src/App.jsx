import Routes from './routes/AppRoutes'
import { AuthProvider } from '@context/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
