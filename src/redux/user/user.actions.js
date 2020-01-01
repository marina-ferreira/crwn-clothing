import UserTypes from './user.types'

export const setCurrentUser = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
})

export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_START
})

export const googleSignInSuccess = user => ({
  type: UserTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
})

export const googleSignInFailure = error => ({
  type: UserTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
})

export const emailSignInStart = credentials => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: credentials
})

export const emailSignInSuccess = user => ({
  type: UserTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
})

export const emailSignInFailure = error => ({
  type: UserTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
})
