
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import './StripeCheckoutButton.sass'

const StripeButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey = 'pk_test_V29aTZS3XMtw4CrsR9UfxEa800ocT1hG0f'
  const onToken = (token) => {
    console.log(token)
    alert('Payment successful.')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crwn Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
