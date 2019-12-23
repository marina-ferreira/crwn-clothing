import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'

import './CartIcon.sass'

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
<span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((total, item) => (total += item.quantity), 0)
})

const mapDispatchToPRops = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToPRops)(CartIcon)
