
import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

import './stripe-checkout-button.styles.sass'

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100
  const publishableKey = 'pk_test_V29aTZS3XMtw4CrsR9UfxEa800ocT1hG0f'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceInCents,
        token
      }
    })
    .then(response => alert('Payment successful'))
    .catch(error => {
      console.log('Payment error:', JSON.parse(error))

      alert(
      `There was an issue with you payment.
      Please make sure you use the privided credit card`)
    })
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

export default StripeCheckoutButton
