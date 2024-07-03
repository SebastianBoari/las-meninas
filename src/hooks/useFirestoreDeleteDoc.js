import { useState } from 'react'
import { deleteDocumentById } from '@services/FirestoreService'

const useFirestoreDeleteDoc = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const deleteDoc = async (collectionName, documentId) => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    try {
      await deleteDocumentById(collectionName, documentId)
      setSuccess(true)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { deleteDoc, loading, error, success }
}

export default useFirestoreDeleteDoc
