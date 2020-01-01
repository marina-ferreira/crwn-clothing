import UserTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case UserTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}

export default userReducer
