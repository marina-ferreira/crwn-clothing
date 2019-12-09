import React from 'react'
import './Button.sass'

const Button = ({ children, ...props }) => (
  <button className='button' {...props}>
    {children}
  </button>
)

export default Button
