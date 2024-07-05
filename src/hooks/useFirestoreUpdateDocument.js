import { useState, useEffect } from 'react'
import { updateDocument } from '@services/FirestoreService'

const useFirestoreUpdateDocument = (
  collectionName,
  documentId,
  field,
  newData
) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const updateDoc = async () => {
      try {
        const updatedDocument = await updateDocument(
          collectionName,
          documentId,
          field,
          newData
        )
        setData(updatedDocument)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    updateDoc()
  }, [collectionName, documentId, field, data])

  return { data, loading, error }
}

export default useFirestoreUpdateDocument
