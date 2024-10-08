import { useEffect, createContext, useMemo } from 'react'
import useFirestoreGetDocuments from '@hooks/useFirestoreGetDocuments'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { data, loading, error, fetchData } =
    useFirestoreGetDocuments('products')

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const productsContext = useMemo(
    () => ({
      products: data,
      loading,
      error,
    }),
    [data, loading, error]
  )

  return (
    <AppContext.Provider value={productsContext}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
