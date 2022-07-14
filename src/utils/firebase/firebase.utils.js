import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAICdwzakU9XFlCldxhKemNF6cvvl9iNKg',
  authDomain: 'loja-lanziloti-db.firebaseapp.com',
  projectId: 'loja-lanziloti-db',
  storageBucket: 'loja-lanziloti-db.appspot.com',
  messagingSenderId: '516542468004',
  appId: '1:516542468004:web:6b658c51c4774233327b31'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const singInWithGooglePopup = () => signInWithPopup(auth, provider)
