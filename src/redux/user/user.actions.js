import UserTypes from './user.types'

export const setCurrentUser = user => ({
  type: UserTypes.SET_CURRENT_USER,
  payload: user
})

export const googleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = credentials => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: credentials
})

export const signInSuccess = user => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = error => ({
  type: UserTypes.SIGN_IN_FAILURE,
  payload: error
})

export const checkUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION
})
