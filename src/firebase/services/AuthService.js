import { auth } from '../firebase'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
}

const logoutUser = async () => {
  return await signOut(auth)
}

const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback)
}

export { loginUser, logoutUser, subscribeToAuthChanges }
