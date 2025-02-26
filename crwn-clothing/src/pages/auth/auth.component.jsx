import React from 'react'
import SignIn from 'components/sign-in/sign-in.component'
import SignUp from 'components/sign-up/sign-up.component'
import './auth.styles.sass'

const AuthPage = () => (
  <div className="auth-page">
    <SignIn />
    <SignUp />
  </div>
)

export default AuthPage
