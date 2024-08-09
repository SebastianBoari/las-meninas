import { useState, useCallback } from 'react'
import { getDocuments } from '@services/FirestoreService'

const useFirestoreGetDocuments = (collectionName) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(
    async (filters = []) => {
      setLoading(true)
      try {
        console.log('fetch')
        const result = await getDocuments(collectionName, filters)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    },
    [collectionName]
  )

  return { data, loading, error, fetchData }
}

export default useFirestoreGetDocuments
