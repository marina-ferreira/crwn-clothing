import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import './Header.sass'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>SHOP</Link>
      <Link className="option" to='/shop'>CONTACT</Link>
      {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link className='option' to='/auth'>SIGN UP</Link>
        )}

      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
