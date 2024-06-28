import { db } from '../firebase'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore'

const fetchDocuments = async (collectionName, filters = []) => {
  try {
    let collectionRef = collection(db, collectionName)

    if (filters.length > 0) {
      filters.forEach((filter) => {
        const { field, operator, value } = filter
        collectionRef = query(collectionRef, where(field, operator, value))
      })
    }

    const snapshot = await getDocs(collectionRef)

    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error(
      `Error fetching documents from collection ${collectionName}: ${error}`
    ) // TODO [PRODUCTION]: Delete console.error

    throw error
  }
}

const fetchDocumentById = async (collectionName, documentId) => {
  try {
    const documentRef = doc(db, collectionName, documentId)
    const documentSnapshot = await getDoc(documentRef)

    if (documentSnapshot.exists()) {
      return { id: documentSnapshot.id, ...documentSnapshot.data() }
    } else {
      throw new Error('No such document!')
    }
  } catch (error) {
    console.error(
      `Error fetching document ${documentId} from collection ${collectionName}: ${error}`
    ) // TODO [PRODUCTION]: Delete console.error

    throw error
  }
}

export { fetchDocuments, fetchDocumentById }
