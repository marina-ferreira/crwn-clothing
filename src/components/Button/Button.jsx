import React from 'react'
import './Button.sass'

const Button = ({ children, isGoogleSignIn, ...props }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`} {...props}>
    {children}
  </button>
)

export default Button
