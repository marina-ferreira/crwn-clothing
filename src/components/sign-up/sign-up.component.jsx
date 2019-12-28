import React from 'react'
import FormInput from 'components/form-input/form-input.component'
import Button from 'components/button/button.component'
import { auth, createUserProfileDoc } from 'firebase/firebase.utils'
import './sign-up.styles.sass'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = e => {
    const { value, name } = e.target

    this.setState({ [name]: value })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert('Password don\'t match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      createUserProfileDoc(user, { displayName })
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error) {
      console.log(error)
    }

  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state

    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            label='Display Name'
            value={displayName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={password}
            onChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            label='Confirm Password'
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />

          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    )
  }
}

export default SignUp
