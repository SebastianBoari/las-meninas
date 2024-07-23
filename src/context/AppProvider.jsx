import { useState, useEffect, createContext } from 'react'
import useFirestoreGetDocuments from '@hooks/useFirestoreGetDocuments'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(null)

  const { data, loading, error } = useFirestoreGetDocuments('products')

  useEffect(() => {
    if (data) {
      setProducts(data)
    }
  }, [data])

  return (
    <AppContext.Provider
      value={{
        products,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
