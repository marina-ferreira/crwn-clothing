import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/Shop'
import Header from './components/Header/Header'
import { Route, Switch } from 'react-router-dom'
import './App.sass'

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
