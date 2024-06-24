import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

import { firebaseVariables } from '../env'

const firebaseConfig = {
  apiKey: firebaseVariables.apiKey,
  authDomain: firebaseVariables.authDomain,
  projectId: firebaseVariables.projectId,
  storageBucket: firebaseVariables.storageBucket,
  messagingSenderId: firebaseVariables.messagingSenderId,
  appId: firebaseVariables.appId,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { app, db, storage, auth }
