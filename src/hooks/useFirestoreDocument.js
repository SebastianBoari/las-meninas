import { useState, useEffect } from 'react'
import { fetchDocumentById } from '@services/FirestoreService'

const useFirestoreDocument = (collectionName, documentId) => {
  const [documentData, setDocumentData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const document = await fetchDocumentById(collectionName, documentId)
        setDocumentData(document)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if (documentId) {
      fetchDocument()
    }
  }, [collectionName, documentId])

  return { document: documentData, loading, error }
}

export default useFirestoreDocument
