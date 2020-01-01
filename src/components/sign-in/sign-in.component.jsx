import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from 'components/form-input/form-input.component'
import Button from 'components/button/button.component'
import { googleSignInStart, emailSignInStart } from 'redux/user/user.actions'
import './sign-in.styles.sass'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const { email, password } = credentials

  const handleChange = (e) => {
    const { value, name } = e.target

    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    emailSignInStart(email, password)
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form className='sign-in-form' onSubmit={handleSubmit}>
        <FormInput
          type='email'
          name='email'
          label='email'
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          label='password'
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons">
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            onClick={googleSignInStart}
            isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
