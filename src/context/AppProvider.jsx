import { useEffect, createContext } from 'react'
import useFirestoreGetDocuments from '@hooks/useFirestoreGetDocuments'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { data, loading, error, fetchData } =
    useFirestoreGetDocuments('products')

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <AppContext.Provider
      value={{
        products: data,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
