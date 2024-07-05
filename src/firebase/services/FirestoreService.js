import { db } from '@fb/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
  addDoc,
  updateDoc,
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
      throw new Error('No such document')
    }
  } catch (error) {
    console.error(
      `Error fetching document ${documentId} from collection ${collectionName}: ${error}`
    ) // TODO [PRODUCTION]: Delete console.error

    throw error
  }
}

const deleteDocumentById = async (collectionName, documentId) => {
  try {
    const documentRef = doc(db, collectionName, documentId)

    await deleteDoc(documentRef)

    console.log(`Document with ID ${documentId} successfully deleted.`) // TODO [PRODUCTION]: Delete console.error

    return `Document with ID ${documentId} successfully deleted.`
  } catch (error) {
    console.error(
      `Error deleting document ${documentId} from collection ${collectionName}: ${error}`
    ) // TODO [PRODUCTION]: Delete console.error

    throw error
  }
}

const createDocument = async (collectionName, newDocument) => {
  try {
    const documentRef = await addDoc(collection(db, collectionName), {
      title: newDocument.title,
      description: newDocument.description,
      featured: newDocument.featured,
      currency: newDocument.currency,
      quantity: newDocument.quantity,
      price: newDocument.price,
      thumbnails: newDocument.thumbnails,
    })

    if (!documentRef.id) {
      throw new Error('The document has not been created')
    }

    return { id: documentRef.id, ...documentRef }
  } catch (error) {
    console.error(
      `Error creating document ${document.title} in collection ${collectionName}: ${error}`
    ) // TODO [PRODUCTION]: Delete console.error

    throw error
  }
}

const updateDocument = async (collectionName, documentId, field, data) => {
  try {
    const documentRef = doc(db, collectionName, documentId)

    const updatedDocument = await updateDoc(documentRef, { [field]: data })

    return updatedDocument
  } catch (error) {
    console.error(
      `Error updating document ${documentId} from collection ${collectionName}: ${error}`
    ) // TODO [PRODUCTION]: Delete console.error

    throw error
  }
}

export {
  fetchDocuments,
  fetchDocumentById,
  deleteDocumentById,
  createDocument,
  updateDocument,
}
