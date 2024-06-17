import { initializeApp } from 'firebase/app'
import { firebaseVariables } from './env.config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseVariables.apiKey,
  authDomain: firebaseVariables.authDomain,
  projectId: firebaseVariables.projectId,
  storageBucket: firebaseVariables.storageBucket,
  messagingSenderId: firebaseVariables.messagingSenderId,
  appId: firebaseVariables.appId,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
