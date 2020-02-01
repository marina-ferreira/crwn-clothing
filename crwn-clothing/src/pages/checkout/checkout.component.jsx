import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors'
import CheckoutItem from 'components/checkout-item/checkout-item.component'
import StripeCheckoutButton from 'components/stripe-checkout-button/stripe-checkout-button.component'

import './checkout.styles.sass'

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(item => <CheckoutItem key={item.id} item={item} />)}

    <div className="test-credit-card">
      <h4>Test Credit Card</h4>
      <p>Number: 4242 4242 4242 4242</p>
      <p>Expiration Date: 02/20</p>
      <p>CVV: 123</p>
    </div>

    <div className="total">TOTAL: ${total}</div>
    <StripeCheckoutButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
