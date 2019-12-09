import React from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import './SignIn.sass'

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

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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

          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn
