import React, { useEffect, lazy, Suspense } from 'react'
import Header from './components/header/header.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import './App.sass'

const HomePage = lazy(() => import('./pages/home/home.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const AuthPage = lazy(() => import('./pages/auth/auth.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
              exact
              path='/auth'
              render={() => currentUser ? (<Redirect to='/' />) : (<AuthPage />)}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
