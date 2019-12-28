import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCart } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.sass'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ?
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        )) :
        <span className="empty-message">Your cart is empty</span>
      }
    </div>

    <Button onClick={() => {
      history.push('/checkout')
      dispatch(toggleCart())
    }}>
      GO TO CHECKOUT
    </Button>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
