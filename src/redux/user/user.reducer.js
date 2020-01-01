import UserTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.GOOGLE_SIGN_IN_SUCCESS:
    case UserTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default userReducer
