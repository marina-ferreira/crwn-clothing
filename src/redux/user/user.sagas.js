import { takeLatest, put, all, call } from 'redux-saga/effects'

import { auth, googleProvider, createUserProfileDoc } from 'firebase/firebase.utils'
import UserTypes from './user.types'
import { googleSignInSuccess, googleSignInFailure } from './user.actions'

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDoc, user)
    const snapshot = yield userRef.get()
    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }))
    console.log(userRef)
  } catch(error) {
    yield put(googleSignInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)])
}
