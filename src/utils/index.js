import { collection, addDoc } from 'firebase/firestore'
import { db } from '@fb/firebase'

/**
 * Adds documents to the 'products' collection in Firestore.
 * @param {Array} documents - Array of document objects to insert.
 */
export const insertDocuments = (documents) => {
  documents.forEach(async (document) => {
    try {
      await addDoc(collection(db, 'products'), document)
    } catch (error) {
      console.error(
        `Error occurred while trying to insert the document ${JSON.stringify(document)} into the collection: ${error}`
      )
    }
  })
}

/**
 * Truncates a string to a specified character limit.
 * @param {String} text - The string to truncate.
 * @param {Number} limit - The maximum number of characters allowed.
 * @returns {String} - The truncated string.
 */
export const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text
  }

  let truncatedText = text.slice(0, limit)

  const lastSpaceIndex = truncatedText.lastIndexOf(' ')

  if (lastSpaceIndex > 0) {
    truncatedText = truncatedText.slice(0, lastSpaceIndex)
  }

  return truncatedText + '...'
}
