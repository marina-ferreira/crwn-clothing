import { takeLatest, call, all, put } from 'redux-saga/effects'

import UserTypes from 'redux/user/user.types'
import { clearCart } from './cart.actions'

export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ])
}
