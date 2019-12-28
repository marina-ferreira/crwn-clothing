import { firestore, convertSnapshotToMap } from 'firebase/firebase.utils'

import ShopTypes from './shop.types'

export const fetchCollectionsStart = () => ({
  type: ShopTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef.get().then(async snapshot => {
      const collectionsMap = convertSnapshotToMap(snapshot)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    })
  }
}
