import { CartTypes } from './cart.types'

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLR_CART:
      return {
        ...state,
        hidden: !state.hidden
      }

    default:
      return state
  }
}

export default cartReducer
