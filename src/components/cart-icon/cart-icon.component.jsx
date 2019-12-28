import React from 'react'
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCart } from 'redux/cart/cart.actions'
import { selectCartItemsCount } from 'redux/cart/cart.selectors'

import './cart-icon.styles.sass'

const CartIcon = ({ toggleCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleCart}>
    <ShoppingIcon className="shopping-icon" />
<span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

const mapDispatchToPRops = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
})

export default connect(mapStateToProps, mapDispatchToPRops)(CartIcon)
