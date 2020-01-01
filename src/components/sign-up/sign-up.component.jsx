import React, { useState } from 'react'
import { connect } from 'react-redux'

import { signUpStart } from 'redux/user/user.actions'
import FormInput from 'components/form-input/form-input.component'
import Button from 'components/button/button.component'

import './sign-up.styles.sass'

const  SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { displayName, email, password, confirmPassword } = credentials

  const handleChange = e => {
    const { value, name } = e.target

    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert('Password don\'t match')
      return
    }

    signUpStart({ displayName, email, password })
  }

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          label='Display Name'
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
  }

const mapDispatchToProps = dispatch => ({
  signUpStart: credentials => dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
