import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserTypes from './user.types'
import {
  auth,
  googleProvider,
  createUserProfileDoc,
  getCurrentUser
} from 'firebase/firebase.utils'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from './user.actions'

export function* getSnapshotFromUserAuth(userAuth, data) {
  try {
    const userRef = yield call(createUserProfileDoc, userAuth, data)
    const snapshot = yield userRef.get()
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }))
  } catch(error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch(error) {
    yield put(signInFailure(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch(error) {
    yield put(signInFailure(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return

    yield getSnapshotFromUserAuth(userAuth)
  } catch(error) {
    yield put(signInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch(error) {
    yield put(signOutFailure(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(signUpSuccess({ user, data: { displayName } }))
  } catch(error) {
    yield put(signUpFailure(error))
  }
}

export function* signInAfterSignUp({ payload: { user, data } }) {
  yield getSnapshotFromUserAuth(user, data)
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(UserTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
  yield takeLatest(UserTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ])
}
