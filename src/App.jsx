import Routes from './routes/AppRoutes'
import { AuthProvider } from '@context/AuthProvider'
import { AppProvider } from '@context/AppProvider'

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Routes />
      </AppProvider>
    </AuthProvider>
  )
}

export default App
