import { useState } from 'react'
import { createDocument } from '@services/FirestoreService'

const useFirestoreCreateDocument = () => {
  // eslint-disable-next-line no-unused-vars
  const [documentData, setDocumentData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const addDocument = async (collectionName, newDocument) => {
    setLoading(true)
    try {
      const document = await createDocument(collectionName, newDocument)
      setDocumentData(document)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { document: addDocument, loading, error }
}

export default useFirestoreCreateDocument
