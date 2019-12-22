import React from 'react'
import Button from '../Button/Button'

import './CartDropdown.sass'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>

    <Button>GO TO CHECKOUT</Button>
  </div>
)

export default CartDropdown
