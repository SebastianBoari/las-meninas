import Routes from './routes/AppRoutes'
import { AuthProvider } from '@context/AuthProvider'
import { AppProvider } from '@context/AppProvider'

const App = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AppProvider>
  )
}

export default App
