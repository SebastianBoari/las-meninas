import { useState, useEffect } from 'react'
import { createDocument } from '@services/FirestoreService'

const useFirestoreCreateDocument = (collectionName, newDocument) => {
  const [documentData, setDocumentData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const addDocument = async () => {
      try {
        const document = await createDocument(collectionName, newDocument)
        setDocumentData(document)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if (newDocument) {
      addDocument()
    }
  }, [collectionName, newDocument])

  return { document: documentData, loading, error }
}

export default useFirestoreCreateDocument
