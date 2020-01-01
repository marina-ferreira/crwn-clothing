import React from 'react'
import { connect } from 'react-redux'
import FormInput from 'components/form-input/form-input.component'
import Button from 'components/button/button.component'
import { auth } from 'firebase/firebase.utils'
import { googleSignInStart } from 'redux/user/user.actions'
import './sign-in.styles.sass'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }

  }

  render() {
    const { googleSignInStart } = this.props

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form className='sign-in-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            onChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)
