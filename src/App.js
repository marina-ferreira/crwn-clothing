import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import { Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
