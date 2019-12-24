import { CartTypes } from './cart.types'

export const toggleCart = () => ({
  type: CartTypes.TOGGLR_CART
})

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
})

export const deleteItem = item => ({
  type: CartTypes.DELETE_ITEM,
  payload: item
})
