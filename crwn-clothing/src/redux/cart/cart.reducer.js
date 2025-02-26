import { CartTypes } from './cart.types'
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLR_CART:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state
  }
}

export default cartReducer
