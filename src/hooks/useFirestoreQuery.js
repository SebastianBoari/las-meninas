import { useState, useEffect } from 'react'
import { fetchDocuments } from '@services/FirestoreService'

const useFirestoreQuery = (collectionName, filters = []) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchDocuments(collectionName, filters)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [collectionName, filters])

  return { data, loading, error }
}

export default useFirestoreQuery
