import { takeLatest, call, put } from 'redux-saga/effects'
import { firestore, convertSnapshotToMap } from 'firebase/firebase.utils'
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'

import ShopTypes from './shop.types'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}
