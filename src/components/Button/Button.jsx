import React from 'react'
import './Button.sass'

const Button = ({ children, isGoogleSignIn, inverted, ...props }) => (
  <button
    className={`
      ${isGoogleSignIn ? 'google-sign-in' : ''}
      ${inverted ? 'inverted' : ''}
      button
    `}
    {...props}>
    {children}
  </button>
)

export default Button
