import React from 'react'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/Shop'
import AuthPage from './pages/Auth/Auth'
import { auth } from './firebase/firebase.utils'
import { Route, Switch } from 'react-router-dom'
import './App.sass'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { currentUser: null }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={AuthPage} />
        </Switch>
      </div>
    )
  }
}

export default App
