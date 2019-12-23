import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'

import './CartDropdown.sass'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>

    <Button>GO TO CHECKOUT</Button>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
