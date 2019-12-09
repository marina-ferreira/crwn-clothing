import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCir1QfTgm7J5oa_PCSxiIHlHU8aSDNHUo",
  authDomain: "crwn-db-d8988.firebaseapp.com",
  databaseURL: "https://crwn-db-d8988.firebaseio.com",
  projectId: "crwn-db-d8988",
  storageBucket: "crwn-db-d8988.appspot.com",
  messagingSenderId: "358263425636",
  appId: "1:358263425636:web:104c910b6b7b695dc9ad71"
}

export const createUserProfileDoc = async (userAuth, data) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshop = await userRef.get()

  if (!snapshop.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({ displayName, email, createdAt, ...data })
    } catch(error) {
      console.log('Error creating user', error.message)
    }
  }

  console.log(snapshop)
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
