export const addItemToCart = (cartItems, cartItemToAdd) => {
  const extistingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

  if (extistingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const extistingCartItem = cartItems.find(item => item.id === cartItemToRemove.id)

  if (extistingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id)
  }

  return cartItems.map(item => (
    item.id === cartItemToRemove.id) ?
    { ...item, quantity: item.quantity - 1 } :
    item
  )
}
