import { CartTypes } from './cart.types'

export const toggleCart = cart => ({
  type: CartTypes.TOGGLR_CART,
  payload: cart
})
