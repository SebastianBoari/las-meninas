import { useState, useEffect } from 'react'
import { getDocuments } from '@services/FirestoreService'

const useFirestoreGetDocuments = (collectionName, filters = []) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDocuments(collectionName, filters)
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

export default useFirestoreGetDocuments
